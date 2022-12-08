import { IsNotEmpty } from "class-validator";
import { LocalFile } from "src/local-files/schemas/local-file.schema";

export class CreateUserDto {
    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    last_name: string;
    
    @IsNotEmpty()
    address: string;

    profile_picture: LocalFile;
}
