import {Ingredient} from '../ingredient/ingredient.model';

export interface Recipe {
    id: string;
    name: string;
    description?: string;
    healthRating?: number;
    tasteRating?: number;
    baseQuantity: number;
    targetQuantity: number;
    ingredients: Ingredient[]
}
