import { Ingredient } from '../../ingredient/ingredient.model';
import { IsNotEmpty } from 'class-validator';

export class CreateRecipeDto {
  //note: I should be capital in this IsNotEmpty
  @IsNotEmpty()
  title: string;

  baseQuantity: number;
  targetQuantity: number;
  ingredients: Ingredient[];
}
