import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

import { Ingredient } from '../../ingredient/ingredient.model';

@Schema({ collection: 'recipe' })
export class RecipeModel extends Document {
  @Prop()
  title: string;

  @Prop()
  description?: string;

  @Prop()
  healthRating?: number;

  @Prop()
  tasteRating?: number;

  @Prop()
  baseQuantity: number;

  @Prop()
  targetQuantity: number;

  @Prop()
  ingredients: Ingredient[];
}

export const RecipeSchema = SchemaFactory.createForClass(RecipeModel);
