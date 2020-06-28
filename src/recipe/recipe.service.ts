import { Injectable } from '@nestjs/common';
import {Recipe} from "./recipe.model";
import { v4 as uuidv4 } from 'uuid';
import {CreateRecipeDto} from "./dto/create-recipe.dto";
import {GetRecipeFilterDto} from "./dto/get-recipe-filter.dto";

@Injectable()
export class RecipeService {
    private recipes: Recipe[] = [];

    getAllRecipes(): Recipe[] {
        return this.recipes;
    }

    getRecipeWithFilters(filterDto: GetRecipeFilterDto): Recipe[] {
        const {searchTerm, source} = filterDto;
        let recipes = this.getAllRecipes();

        if(searchTerm) {
            recipes = recipes.filter(recipe =>
                recipe.title.includes(searchTerm) ||
                recipe.description.includes(searchTerm)
            );
        };

        //filter by source
        //todo
        
        return recipes;
    }

    getRecipeByID(recipeId: string): Recipe {
        const filteredList: Recipe[] = this.recipes.filter(recipe => recipe.id === recipeId);
        if (filteredList.length === 1) {
            return filteredList[0];
        }
        else {
            return null;
        }
    }

    createRecipe(recipe: CreateRecipeDto): Recipe {
        const recipeWithId: Recipe = {
            ...recipe,
            id: uuidv4()
        };
        this.recipes.push(recipeWithId);
        return recipeWithId;
    }

    deleteRecipe(recipeId: string): boolean {
        console.log(`recipe with id: ${recipeId} deleted`);
        return true;
    }
}
