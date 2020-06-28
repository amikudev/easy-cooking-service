import {Body, Controller, Get, Param, Post, Req} from '@nestjs/common';
import {Request} from "express";
import {Recipe} from "./recipe.model";
import {RecipeService} from "./recipe.service";
import {CreateRecipeDto} from "./dto/create-recipe.dto";

@Controller('recipe')
export class RecipeController {
    constructor(private recipeService: RecipeService) {
    }

    @Get()
    getAllRecipies(@Req() request: Request): Recipe[] {
        return this.recipeService.getAllRecipes();
    }

    @Get(':id')
    getOneRecipe(@Param('id') id: string): Recipe {
        return this.recipeService.getRecipe(id);
    }

    @Post()
    createRecipe(@Body() recipe: CreateRecipeDto): Recipe {
        console.log(recipe);
        return this.recipeService.createRecipe(recipe);
    }
}
