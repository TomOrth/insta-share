import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {InstaPage} from '../pages/insta/insta';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Camera } from '@ionic-native/camera'
import { Dialogs } from '@ionic-native/dialogs';
import { Instagram } from '@ionic-native/instagram'
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    InstaPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    InstaPage
  ],
  providers: [
    StatusBar,
    Camera,
    SplashScreen,
    Dialogs,
    Instagram,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
  ]
})
export class AppModule {}
