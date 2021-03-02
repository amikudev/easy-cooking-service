import { Model } from 'mongoose';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Recipe } from './recipe.model';
import { RecipeModel } from './schema/recipe.schema';
import { v4 as uuidv4 } from 'uuid';
import { CreateRecipeDto } from './dto/create-recipe.dto';
import { GetRecipeFilterDto } from './dto/get-recipe-filter.dto';

@Injectable()
export class RecipeService {
  private recipes: Recipe[] = [];

  constructor(
    @InjectModel(RecipeModel.name) private recipeModel: Model<RecipeModel>,
  ) {}

  getAllRecipes(): Promise<RecipeModel[]> {
    return this.recipeModel.find().exec();
  }

  //todo: implement this.

  // getRecipeWithFilters(filterDto: GetRecipeFilterDto): Recipe[] {
  //     const {searchTerm, source} = filterDto;
  //     let recipes = this.getAllRecipes();
  //
  //     if(searchTerm) {
  //         recipes = recipes.filter(recipe =>
  //             recipe.title.includes(searchTerm) ||
  //             recipe.description.includes(searchTerm)
  //         );
  //     };
  //
  //     //filter by source
  //     //todo
  //
  //     return recipes;
  // }

  async getRecipeByID(recipeId: string): Promise<RecipeModel> {
    const recipe = await this.recipeModel.findById(recipeId);
    if (recipe) {
      return recipe;
    } else {
      throw new NotFoundException(`Recipe with id: "${recipeId}" not found`);
    }
  }

  async createOrSaveRecipe(recipe: Recipe): Promise<RecipeModel> {
    console.log('recipe', recipe);
    const createdRecipe = new this.recipeModel(recipe);
    if (recipe._id) {
      return createdRecipe.updateOne(recipe);
    } else {
      return createdRecipe.save();
    }
  }

  async deleteRecipe(recipeId: string): Promise<any> {
    return await this.recipeModel.findByIdAndDelete(recipeId).exec();
  }
}
