import {Ingredient} from '../ingredient/ingredient.model';
import { SourceModel } from './source.model';

export interface Recipe {
    _id: string;
    title: string;
    source: SourceModel;
    description?: string;
    healthRating?: number;
    tasteRating?: number;
    baseRecipe: number;
    targetRecipe?: number;
    ingredients: Ingredient[];
    [field: string]: any;
}
