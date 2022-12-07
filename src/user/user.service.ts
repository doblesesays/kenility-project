import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User, UserDocument } from './schemas/user.schema';
import { LocalFileDto } from '../localFiles/dto/local-file.dto';

@Injectable()
export class UserService {

  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async create(createUserDto: CreateUserDto, createProfilePictureDto: LocalFileDto): Promise<User> {
    console.log(createUserDto)
    console.log(createProfilePictureDto)
    const createdUser = await this.userModel.create(createUserDto);
    return createdUser;
  }

  findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }

  async update(id: ObjectId, updateUserDto: UpdateUserDto): Promise<User> {
    const updatedUser = await this.userModel.findOneAndUpdate({id}, updateUserDto, {returnOriginal: false});
    return updatedUser;
  }
}
