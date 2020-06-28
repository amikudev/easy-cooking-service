import {Body, Controller, Get, Param, Post, Req} from '@nestjs/common';
import {Request} from "express";
import {Recipe} from "./recipe.model";
import {RecipeService} from "./recipe.service";

@Controller('recipe')
export class RecipeController {
    constructor(private recipeService: RecipeService) {
    }

    @Get()
    getAllRecipies(@Req() request: Request): Recipe[] {
        return this.recipeService.getAllRecipes();
    }

    @Get(':id')
    getOneRecipe(@Param('id') id: string): string {
        return `Return one Recipe with id: ${id}`;
    }

    @Post()
    createRecipe(@Body() recipe: Recipe) {
        console.log(recipe);
        this.recipeService.createRecipe(recipe);
    }
}
