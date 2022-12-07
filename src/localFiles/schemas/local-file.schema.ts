import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type LocalFileDocument = HydratedDocument<LocalFile>;

@Schema()
export class LocalFile {
    
  @Prop()
  filename: string;

  @Prop()
  path: string;

  @Prop()
  mimetype: string;
}

export const LocalFileSchema = SchemaFactory.createForClass(LocalFile);