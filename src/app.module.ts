import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from 'nestjs-config';
import { RecipeModule } from './recipe/recipe.module';
import { IngredientModule } from './ingredient/ingredient.module';
import { LoggerService } from './logger/logger.service';
import * as path from 'path';

@Module({
  imports: [
    // MongooseModule.forRoot('mongodb://localhost/nest'),
    MongooseModule.forRoot(
      'mongodb+srv://amit_krsna:CWmA3fttepzMd6GI@radharani-kitchen-vlknw.mongodb.net/easy-cooking?retryWrites=true&w=majority',
      {
        loggerLevel: 'debug',
        useNewUrlParser: true,
      },
    ),
    ConfigModule.load(path.resolve(__dirname, 'config', '**', '!(*.d).{ts,js}')),
    // FirebaseAdminCoreModule.forRootAsync({
    //   useFactory: (config: ConfigService) => config.get('firebase'),
    //   inject: [ConfigService],
    // }),
    RecipeModule,
    IngredientModule,
  ],
  controllers: [AppController],
  providers: [AppService, LoggerService],
  exports: [],
})
export class AppModule {}
