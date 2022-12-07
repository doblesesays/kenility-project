import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateLocalFileDto } from './dto/create-local-file.dto';
import { UpdateLocalFileDto } from './dto/update-local-file.dto';
import { LocalFile, LocalFileDocument } from './schemas/local-file.schema';

@Injectable()
export class LocalFilesService {

  constructor(
    @InjectModel(LocalFile.name) private localFileModel: Model<LocalFileDocument>
  ) {}

  async create(createLocalFileDto: CreateLocalFileDto): Promise<LocalFile> {
    const createLocalFile = await this.localFileModel.create(createLocalFileDto);
    return createLocalFile;
  }

  async update(id: string, updateLocalFileDto: UpdateLocalFileDto): Promise<LocalFile> {
    const updatedUser = await this.localFileModel.findOneAndUpdate({id}, updateLocalFileDto, {returnOriginal: false});
    return updatedUser;
  }
}
