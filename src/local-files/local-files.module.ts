import { Module } from '@nestjs/common';
import { LocalFilesService } from './local-files.service';
import { MongooseModule } from '@nestjs/mongoose';
import { LocalFile, LocalFileSchema } from './schemas/local-file.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: LocalFile.name, schema: LocalFileSchema }])],
  providers: [LocalFilesService],
  exports: [MongooseModule]
})
export class LocalFilesModule {}
