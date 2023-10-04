import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Query,
  Req,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { Request } from 'express';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';
import { CreateRecipeDto } from './dto/create-recipe.dto';
import { DeleteRecipeDto } from './dto/delete-recipe.dto';
import { GetRecipeFilterDto } from './dto/get-recipe-filter.dto';
import { RecipeModel } from './schema/recipe.schema';
import CookbookRecipeModel from "./schema/CookbookRecipe.model";
import printRecipe from "./recipePrinter";

@Controller('recipe')
export class RecipeController {
  constructor(private recipeService: RecipeService) {}

  @Get()
  getRecipies(@Query() filterDto: GetRecipeFilterDto): Promise<RecipeModel[]> {
    if (Object.keys(filterDto).length) {
      //todo: correctly get filtered recipies
      return Promise.resolve([]);
    } else {
      const ans =  this.recipeService.getAllRecipes();
      ans.then(recipes => {
        recipes.forEach(recipe => {
          printRecipe(recipe);
        })
      })
      return ans;
    }
  }

  // @ts-ignore
  @Get('/formatted')
  getRecipesFormatted(@Query() filterDto: GetRecipeFilterDto): any {
    const ans: CookbookRecipeModel[] = [];

    this.recipeService.getAllRecipes().then(recipes => {
      ans.push(new CookbookRecipeModel("Sample"));
      return Promise.resolve(ans);
    }).catch(error => {
      return Promise.resolve(ans);
    })
  }

  @Get('/:id')
  async getRecipeByID(@Param('id') id: string): Promise<RecipeModel> {
    return this.recipeService.getRecipeByID(id);
  }

  @Post()
  @UsePipes(ValidationPipe)
  async createRecipe(@Body() recipe: Recipe): Promise<RecipeModel> {
    console.log(recipe);
    if ('hk' === (recipe.credential as string).trim()) {
      delete recipe.credential;
      return this.recipeService.createOrSaveRecipe(recipe);
    } else {
      return Promise.reject('Incorrect Credentials');
    }
  }

  // @Delete(':id')
  // deleteRecipe(@Param('id') id): Promise<any> {
  //     return this.recipeService.deleteRecipe(id);
  // }
}
