import {Body, Controller, Get, Param, Post, Req} from '@nestjs/common';
import {Request} from "express";
import {Recipe} from "./recipe.model";
import {RecipeService} from "./recipe.service";

@Controller('recipe')
export class RecipeController {
    constructor(private recipeService: RecipeService) {
    }

    @Get()
    getAllIngredients(@Req() request: Request): Recipe[] {
        return this.recipeService.getAllRecipes();
    }

    @Get(':id')
    getOneIngredient(@Param('id') id: string): string {
        return `Return one Recipe with id: ${id}`;
    }

    @Post()
    addIngredient(@Body() recipeDto: Recipe) {
        console.log(recipeDto);
        return recipeDto;
    }
}
