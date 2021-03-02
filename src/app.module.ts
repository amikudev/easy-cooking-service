import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';


import { RecipeModule } from './recipe/recipe.module';
import { IngredientModule } from './ingredient/ingredient.module';
import { LoggerService } from './logger/logger.service';
import { AssetModule } from './asset/asset.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    // MongooseModule.forRoot('mongodb://localhost/nest'),
    MongooseModule.forRoot(
        'mongodb+srv://amit_krsna:CWmA3fttepzMd6GI@radharani-kitchen-vlknw.mongodb.net/easy-cooking?retryWrites=true&w=majority',
        {
          loggerLevel: 'debug',
          useNewUrlParser: true
        }),
    RecipeModule,
    IngredientModule,
    AssetModule
  ],
  controllers: [AppController],
  providers: [AppService, LoggerService],
  exports: []
})
export class AppModule {}
