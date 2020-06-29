import {Body, Controller, Delete, Get, Param, Post, Query, Req, UsePipes, ValidationPipe} from '@nestjs/common';
import {Request} from "express";
import {Recipe} from "./recipe.model";
import {RecipeService} from "./recipe.service";
import {CreateRecipeDto} from "./dto/create-recipe.dto";
import {DeleteRecipeDto} from "./dto/delete-recipe.dto";
import {GetRecipeFilterDto} from "./dto/get-recipe-filter.dto";

@Controller('recipe')
export class RecipeController {
    constructor(private recipeService: RecipeService) {
    }

    @Get()
    getRecipies(@Query() filterDto: GetRecipeFilterDto): Recipe[] {
        if(Object.keys(filterDto).length) {

        } else {
            return this.recipeService.getAllRecipes();
        }

    }

    @Get('/:id')
    getRecipeByID(@Param('id') id: string): Recipe {
        return this.recipeService.getRecipeByID(id);
    }

    @Post()
    @UsePipes(ValidationPipe)
    createRecipe(@Body() recipe: CreateRecipeDto): Recipe {
        console.log(recipe);
        return this.recipeService.createRecipe(recipe);
    }

    @Delete(':id')
    deleteRecipe(@Param('id') id): DeleteRecipeDto {
        const status = this.recipeService.deleteRecipe(id);
        return {
            id
        };
    }
}
