import { ObjectId } from "mongoose";

export class LocalFile {
    id: ObjectId;
    filename: string;
    path: string;
    mimetype: string;
}
