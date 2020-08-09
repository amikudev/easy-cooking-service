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
    getRecipies(@Query() filterDto: GetRecipeFilterDto): Promise<Recipe[]> {
        if(Object.keys(filterDto).length) {
            //todo: correctly get filtered recipies
            return Promise.resolve([]);
        } else {
            return this.recipeService.getAllRecipes();
        }

    }

    @Get('/:id')
    async getRecipeByID(@Param('id') id: string): Promise<Recipe> {
        return this.recipeService.getRecipeByID(id);
    }

    // @Post()
    // @UsePipes(ValidationPipe)
    // async createRecipe(@Body() recipe: CreateRecipeDto): Promise<Recipe> {
    //     console.log(recipe);
    //     return this.recipeService.createRecipe(recipe);
    // }
    //
    // @Delete(':id')
    // deleteRecipe(@Param('id') id): Promise<any> {
    //     return this.recipeService.deleteRecipe(id);
    // }
}
