import {Body, Controller, Get, Param, Post, Req} from '@nestjs/common';
import {Request} from "express";
import {Recipe} from "./recipe.dto";

@Controller('recipe')
export class RecipeController {
    @Get()
    getAllIngredients(@Req() request: Request): string {
        return "All Recipies";
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
