import { Injectable } from '@nestjs/common';
import {Recipe} from "./recipe.model";

@Injectable()
export class RecipeService {
    private recipes: Recipe[] = [];

    getAllRecipes() {
        return this.recipes;
    }

    createRecipe(recipe: Recipe): Recipe {
        this.recipes.push(recipe);
        return recipe;
    }
}
