import {Body, Controller, Get, Param, Post, Req} from '@nestjs/common';
import {Request} from 'express';
import {Ingredient} from './ingredient.dto';

@Controller('ingredient')
export class IngredientController {
    @Get()
    getAllIngredients(@Req() request: Request): string {
        console.log('request', request);
        return "All ingredients";
    }

    @Get(':id')
    getOneIngredient(@Param('id') id: string): string {
        return `Return one ingredient with id: ${id}`;
    }

    @Post()
    addIngredient(@Body() ingredientDTO: Ingredient) {
        console.log(ingredientDTO);
        return ingredientDTO;
    }
}
