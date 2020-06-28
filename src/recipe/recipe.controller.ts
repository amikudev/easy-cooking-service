import {Body, Controller, Delete, Get, Param, Post, Req} from '@nestjs/common';
import {Request} from "express";
import {Recipe} from "./recipe.model";
import {RecipeService} from "./recipe.service";
import {CreateRecipeDto} from "./dto/create-recipe.dto";
import {DeleteRecipeDto} from "./dto/delete-recipe.dto";

@Controller('recipe')
export class RecipeController {
    constructor(private recipeService: RecipeService) {
    }

    @Get()
    getAllRecipies(@Req() request: Request): Recipe[] {
        return this.recipeService.getAllRecipes();
    }

    @Get('/:id')
    getRecipeByID(@Param('id') id: string): Recipe {
        return this.recipeService.getRecipeByID(id);
    }

    @Post()
    createRecipe(@Body() recipe: CreateRecipeDto): Recipe {
        console.log(recipe);
        return this.recipeService.createRecipe(recipe);
    }

    @Delete(':id')
    deleteRecipe(@Param('id') id): DeleteRecipeDto {
        const status = this.recipeService.deleteRecipe(id);
        return {
            id,
            requestStatus: status
        };
    }
}
