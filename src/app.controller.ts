import { Controller, Get, Inject, UseGuards } from '@nestjs/common';
// import { FirebaseAdminSDK, FIREBASE_ADMIN_INJECT } from '@tfarras/nestjs-firebase-admin';
// import { AuthGuard } from '@nestjs/passport';

import { AppService } from './app.service';

@Controller()
export class AppController {
  // constructor(@Inject(FIREBASE_ADMIN_INJECT) private readonly fireSDK: FirebaseAdminSDK) {}

  // @Get()
  // getHello(): string {
  //   return this.appService.getHello();
  // }

  // @Get()
  // @UseGuards(AuthGuard('firebase'))
  // getHello() {
  //   return this.fireSDK.auth().listUsers();
  // }
}
