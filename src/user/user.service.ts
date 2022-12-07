import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { CreateLocalFileDto } from 'src/local-files/dto/create-local-file.dto';
import { LocalFilesService } from 'src/local-files/local-files.service';
import { LocalFile } from 'src/local-files/schemas/local-file.schema';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User, UserDocument } from './schemas/user.schema';

@Injectable()
export class UserService {

  constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const createdUser = await this.userModel.create(createUserDto);
    console.log(createdUser)
    return createdUser;
  }

  findAll(): Promise<User[]> {
    return this.userModel.find().populate('profile_picture') .exec();
  }

  async update(id: ObjectId, updateUserDto: UpdateUserDto): Promise<User> {
    const updatedUser = await this.userModel.findOneAndUpdate({id}, updateUserDto, {returnOriginal: false});
    return updatedUser;
  }
}
