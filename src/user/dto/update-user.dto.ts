import { PartialType } from '@nestjs/mapped-types';
import { LocalFileDto } from 'src/localFiles/dto/local-file.dto';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {
    // profile_picture?: LocalFileDto;
}
