import { LocalFile } from "src/local-files/schemas/local-file.schema";

export class CreateUserDto {
    name: string;
    last_name: string;
    address: string;
    profile_picture: LocalFile;
}
