import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';

import { IngredientController } from './ingredient/ingredient.controller';
import { RecipeController } from './recipe/recipe.controller';


@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/nest')
  ],
  controllers: [AppController, IngredientController, RecipeController],
  providers: [AppService],
  exports: []
})
export class AppModule {}
