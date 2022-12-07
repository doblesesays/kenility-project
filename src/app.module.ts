import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { LocalFilesModule } from './local-files/local-files.module';
import { LocalFilesService } from './local-files/local-files.service';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/kenility'),
    UserModule,
    LocalFilesModule
  ],
  controllers: [AppController],
  providers: [AppService, LocalFilesService],
})
export class AppModule {}
