import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { IngredientController } from './ingredient/ingredient.controller';
import { RecipeController } from './recipe/recipe.controller';

@Module({
  imports: [],
  controllers: [AppController, IngredientController, RecipeController],
  providers: [AppService],
})
export class AppModule {}
