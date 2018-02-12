import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MainPage } from '../pages/main/main';
import { IonicStorageModule } from '@ionic/storage'; 
// import { Storage } from '@ionic/storage';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TutorialPage } from '../pages/tutorial/tutorial';
import { SignupPage } from '../pages/signup/signup';
import { RegularUserPage } from '../pages/regular-user/regular-user';
import { PtUserPage } from '../pages/pt-user/pt-user';
import { Todos } from '../providers/todos/todos';
import { Auth } from '../providers/auth/auth';
import { StorageProvider } from '../providers/storage/storage';
import { HttpModule } from '@angular/http';
// import { IonicPageModule } from 'ionic-angular/module';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MainPage,
    TutorialPage,
    SignupPage,
    RegularUserPage,
    PtUserPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(), 
    BrowserAnimationsModule,
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MainPage,
    TutorialPage,
    SignupPage,
    RegularUserPage,
    PtUserPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Todos,
    Auth
  ]
})
export class AppModule {}
