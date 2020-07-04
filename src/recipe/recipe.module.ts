import { Module } from '@nestjs/common';
import {RecipeController} from "./recipe.controller";
import { RecipeService } from './recipe.service';
import {MongooseModule} from "@nestjs/mongoose";
import {RecipeModel, RecipeSchema} from "./schema/recipe.schema";

@Module({
    imports: [MongooseModule.forFeature([{ name: RecipeModel.name, schema: RecipeSchema }])],
    controllers: [RecipeController],
    providers: [RecipeService]
})
export class RecipeModule {}
