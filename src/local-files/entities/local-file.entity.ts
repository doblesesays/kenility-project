import { ObjectId } from "mongoose";

export class LocalFile {
    id: ObjectId;
    url: string;
    path: string;
    mimetype: string;
}
