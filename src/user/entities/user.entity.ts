import { ObjectId } from "mongoose";

export class User {
    id: ObjectId;
    name: string;
    last_name: string;
    address: string;
    // profile_picture: string;
}
