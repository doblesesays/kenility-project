import { Controller, Get, Post, Body, Patch, Param, UseInterceptors, UploadedFile } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ObjectId } from 'mongoose';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { Express } from 'express';
import { CreateLocalFileDto } from 'src/local-files/dto/create-local-file.dto';
import { LocalFilesService } from 'src/local-files/local-files.service';

@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly localFilesService: LocalFilesService
  ) {}

  @Post()
  /* @UseInterceptors(FileInterceptor('profile_picture', {
    storage: diskStorage({
      destination: './uploadedFiles/profile_pictures'
    })
  })) */
  async create(@Body() createUserDto: CreateUserDto, /* @UploadedFile() picture: Express.Multer.File */) {
    let createProfilePictureDto: CreateLocalFileDto = {
      path: 'file.path',
      filename: 'file.originalname',
      mimetype: 'file.mimetype'
    }
    const createdProfilePicture = await this.localFilesService.create(createProfilePictureDto);
    createUserDto.profile_picture = createdProfilePicture;
    return this.userService.create(createUserDto);
  }

  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Patch(':id')
  update(@Param('id') id: ObjectId, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(id, updateUserDto);
  }
}
