import * as mongoose from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { LocalFile } from '../../localFiles/schemas/local-file.schema';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
    
  @Prop()
  name: string;

  @Prop()
  last_name: string;

  @Prop()
  address: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'ProfilePicture' })
  profile_picture: LocalFile;
}

export const UserSchema = SchemaFactory.createForClass(User);