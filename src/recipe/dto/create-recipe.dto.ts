import {Ingredient} from "../../ingredient/ingredient.model";

export class CreateRecipeDto {
    title: string;
    baseQuantity: number;
    targetQuantity: number;
    ingredients: Ingredient[];
}
