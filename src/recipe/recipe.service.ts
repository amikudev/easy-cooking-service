import { Injectable } from '@nestjs/common';
import {Recipe} from "./recipe.dto";

@Injectable()
export class RecipeService {
    private recipes: Recipe[] = [];

    getAllRecipes() {
        return this.recipes;
    }

    // addTask() {
    //
    // }
}
