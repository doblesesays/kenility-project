import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './schemas/user.schema';
import { LocalFilesService } from 'src/local-files/local-files.service';
import { LocalFilesModule } from 'src/local-files/local-files.module';

@Module({
  imports: [MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]), LocalFilesModule],
  controllers: [UserController],
  providers: [UserService, LocalFilesService]
})
export class UserModule {}
