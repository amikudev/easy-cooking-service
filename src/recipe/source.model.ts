
export interface SourceModel {
  cook: string;

  book: string;
  page: number;
  url: string;
}


// import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
// import { Document } from 'mongoose';
//
// @Schema({ collection: 'source' })
// export interface SourceModel extends Document {
//   @Prop()
//   cook: string;
//
//   book: string;
//   page: number;
//   url: string;
// }