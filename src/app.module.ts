import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';

import { IngredientController } from './ingredient/ingredient.controller';
import { RecipeModule } from './recipe/recipe.module';


@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/nest'),
    RecipeModule
  ],
  controllers: [AppController, IngredientController],
  providers: [AppService],
  exports: []
})
export class AppModule {}
