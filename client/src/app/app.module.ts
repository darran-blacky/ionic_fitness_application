
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';

/**   Modules  */
import { IonicStorageModule } from '@ionic/storage'; 
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import { RegularUserPageModule } from '../pages/regular-user/regular-user.module';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

/**   Pages    */
import { HomePage } from '../pages/home/home';
import { MainPage } from '../pages/main/main';
import { SideMenuPage } from '../pages/side-menu/side-menu'
import { WorkoutsPage } from '../pages/workouts/workouts'
import { NutritionPage } from '../pages/nutrition/nutrition'
import { TutorialPage } from '../pages/tutorial/tutorial';
import { SignupPage } from '../pages/signup/signup';
import { RegularUserPage } from '../pages/regular-user/regular-user';
import { PtUserPage } from '../pages/pt-user/pt-user';
import { WorkoutExercisesPage } from '../pages/workout-exercises/workout-exercises';
import { CurrentClientsPage} from '../pages/current-clients/current-clients';
import { CurrentPtPage } from '../pages/current-pt/current-pt';
import { PtFinderPage } from '../pages/pt-finder/pt-finder';
import { ViewDealsPage } from '../pages/view-deals/view-deals';
import { ManageDealsPage } from '../pages/manage-deals/manage-deals';
import { ViewClientsPage } from '../pages/view-clients/view-clients';


/** Providers */
import { Auth } from '../providers/auth/auth';
import { WorkoutManagerProvider } from '../providers/workout-manager/workout-manager';
import { StorageProvider } from '../providers/storage/storage';
import { Todos } from '../providers/todos/todos';
import { TrainersProvider } from '../providers/trainers/trainers';

// import { IonicPageModule } from 'ionic-angular/module';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MainPage,
    TutorialPage,
    SignupPage,
    PtUserPage,
    SideMenuPage,
    WorkoutExercisesPage,
    PtFinderPage
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(), 
    BrowserAnimationsModule,
    HttpModule,
    RegularUserPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MainPage,
    TutorialPage,
    SignupPage,
    RegularUserPage,
    PtUserPage,
    SideMenuPage,
    WorkoutExercisesPage,
    PtFinderPage
   
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Todos,
    Auth,
    WorkoutManagerProvider,
    TrainersProvider
  ]
})
export class AppModule {}
