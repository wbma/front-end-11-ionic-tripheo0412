import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import { MyApp } from './app.component';

import {LoginPage} from '../pages/login/login';
import {FrontPage} from '../pages/front/front';
import {RegisterPage} from '../pages/register/register';
import {UploadPage} from '../pages/upload/upload';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {HttpClientModule} from '@angular/common/http';
import { MediaProvider } from '../providers/media/media';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    TabsPage,
    FrontPage,
    RegisterPage,
    UploadPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    FormsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    FrontPage,
    LoginPage,
    RegisterPage,
    UploadPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MediaProvider,
  ]
})
export class AppModule {}
