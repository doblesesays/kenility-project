import { Controller, Get, Post, Body, Param, UseInterceptors, UploadedFile, ParseFilePipe, MaxFileSizeValidator, BadRequestException, UseGuards, Put, HttpException, HttpStatus } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { Express } from 'express';
import { CreateLocalFileDto } from 'src/local-files/dto/create-local-file.dto';
import { LocalFilesService } from 'src/local-files/local-files.service';
import { UpdateLocalFileDto } from 'src/local-files/dto/update-local-file.dto';
import { LocalAuthGuard } from 'src/auth/local-auth.guard';
import { IdParam } from './entities/id-param.entity';

@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly localFilesService: LocalFilesService
  ) {}

  @Post()
  @UseInterceptors(FileInterceptor('profile_picture', {
    storage: diskStorage({
      destination: './public/profile_pictures',
      filename(req, file, callback) {
        if (!file.mimetype.includes('image')) {
          return callback(new BadRequestException('Validation failed (expected type is .(png|jpeg|jpg))'), '');
        }
        callback(null, Math.round(Math.random() * 1E17) + file.mimetype.replace('image/', '.'))
      },
    }),
  }))
  @UseGuards(LocalAuthGuard)
  async create(@Body() createUserDto: CreateUserDto, @UploadedFile(
    new ParseFilePipe({
      validators: [
        new MaxFileSizeValidator({ maxSize: 1024 * 1024 * 3 }), // 3mb
      ],
    })
  ) file: Express.Multer.File) {
    let createProfilePictureDto: CreateLocalFileDto = {
      url: 'profile_pictures/'+file.filename,
      path: file.path,
      mimetype: file.mimetype
    }
    const createdProfilePicture = await this.localFilesService.create(createProfilePictureDto);
    createUserDto.profile_picture = createdProfilePicture;
    return this.userService.create(createUserDto);
  }

  @UseGuards(LocalAuthGuard)
  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @UseGuards(LocalAuthGuard)
  @Put(':id')
  @UseInterceptors(FileInterceptor('profile_picture', {
    storage: diskStorage({
      destination: './public/profile_pictures',
      filename(req, file, callback) {
        if (!file.mimetype.includes('image')) {
          return callback(new BadRequestException('Validation failed (expected type is .(png|jpeg|jpg))'), '');
        }
        callback(null, Math.round(Math.random() * 1E17) + file.mimetype.replace('image/', '.'))
      },
    }),
  }))
  async update(@Param() param: IdParam, @Body() updateUserDto: UpdateUserDto, @UploadedFile(
    new ParseFilePipe({
      validators: [
        new MaxFileSizeValidator({ maxSize: 1024 * 1024 * 3 }), // 3mb
      ],
      fileIsRequired: false
    })
  ) file: Express.Multer.File) {
    const id = param.id;
    delete updateUserDto['profile_picture'];

    const updatedUser = await this.userService.update(id, updateUserDto);

    if (updatedUser) {
      if (file) {
        let updateProfilePictureDto: UpdateLocalFileDto = {
          url: 'profile_pictures/'+file.filename,
          path: file.path,
          mimetype: file.mimetype
        }
        updatedUser.profile_picture = await this.localFilesService.update(updatedUser.profile_picture._id, updateProfilePictureDto);
      }
      return updatedUser;
    }
    throw new HttpException('User not found', HttpStatus.NOT_FOUND);
  }
}
