import { Injectable } from '@nestjs/common';
import {Recipe} from "./recipe.model";
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class RecipeService {
    private recipes: Recipe[] = [];

    getAllRecipes() {
        return this.recipes;
    }

    createRecipe(recipe: Recipe): Recipe {
        recipe = {
            ...recipe,
            id: uuidv4()
        };
        this.recipes.push(recipe);
        return recipe;
    }
}
