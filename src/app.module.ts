import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';

import { RecipeModule } from './recipe/recipe.module';
import { IngredientModule } from './ingredient/ingredient.module';
import { LoggerService } from './logger/logger.service';


@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/nest'),
    RecipeModule,
    IngredientModule
  ],
  controllers: [AppController],
  providers: [AppService, LoggerService],
  exports: []
})
export class AppModule {}
