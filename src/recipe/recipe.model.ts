import {Ingredient} from '../ingredient/ingredient.model';

export interface Recipe {
    title: string;
    description?: string;
    healthRating?: number;
    tasteRating?: number;
    baseQuantity: number;
    targetQuantity: number;
    ingredients: Ingredient[]
}
