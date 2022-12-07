import { Controller, Get, Post, Body, Patch, Param, UseInterceptors, UploadedFile } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ObjectId } from 'mongoose';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { Express } from 'express';
import { LocalFileDto } from '../localFiles/dto/local-file.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  /* @UseInterceptors(FileInterceptor('profile_picture', {
    storage: diskStorage({
      destination: './uploadedFiles/profile_pictures'
    })
  })) */
  create(@Body() createUserDto: CreateUserDto, /* @UploadedFile() picture: Express.Multer.File */) {
    let createProfilePictureDto: LocalFileDto = {
      path: 'file.path',
      filename: 'file.originalname',
      mimetype: 'file.mimetype'
    }
    return this.userService.create(createUserDto, createProfilePictureDto);
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
