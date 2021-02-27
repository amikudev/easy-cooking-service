import { Model } from 'mongoose';
import {Injectable, NotFoundException} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import {Recipe} from "./recipe.model";
import {RecipeModel} from "./schema/recipe.schema";
import { v4 as uuidv4 } from 'uuid';
import {CreateRecipeDto} from "./dto/create-recipe.dto";
import {GetRecipeFilterDto} from "./dto/get-recipe-filter.dto";

@Injectable()
export class RecipeDal {
constructor(@InjectModel(RecipeModel.name) private recipeModel: Model<RecipeModel>) {}

  getAllRecipes(): Promise<RecipeModel[]> {
    return this.recipeModel.find().exec();
  }
}
