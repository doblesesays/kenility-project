import { LocalFileDto } from "src/localFiles/dto/local-file.dto";


export class CreateUserDto {
    name: string;
    last_name: string;
    address: string;
    // profile_picture: LocalFileDto;
}
