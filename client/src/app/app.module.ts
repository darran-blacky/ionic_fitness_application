
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
// import { WorkoutsPage } from '../pages/workouts/workouts'
// import { NutritionPage } from '../pages/nutrition/nutrition'
import { TutorialPage } from '../pages/tutorial/tutorial';
import { SignupPage } from '../pages/signup/signup';
import { RegularUserPage } from '../pages/regular-user/regular-user';
import { PtUserPage } from '../pages/pt-user/pt-user';
import { WorkoutExercisesPage } from '../pages/workout-exercises/workout-exercises';
// import { CurrentClientsPage} from '../pages/current-clients/current-clients';
// import { CurrentPtPage } from '../pages/current-pt/current-pt';
import { PtFinderPage } from '../pages/pt-finder/pt-finder';
// import { ViewDealsPage } from '../pages/view-deals/view-deals';
import { ManageDealsPage } from '../pages/manage-deals/manage-deals';
// import { ViewClientsPage } from '../pages/view-clients/view-clients';
// import { CreateWorkoutPage } from '../pages/create-workout/create-workout';
// import { ProfilePage } from '../pages/profile/profile';
// import { ExerciseGroupsPage } from '../pages/exercise-groups/exercise-groups';
// import { ExerciseInfoPage } from '../pages/exercise-info/exercise-info';
// import { ExerciseListPage } from '../pages/exercise-list/exercise-list';

/** Providers */
import { Auth } from '../providers/auth/auth';
import { WorkoutManagerProvider } from '../providers/workout-manager/workout-manager';
// import { StorageProvider } from '../providers/storage/storage';
import { Offers } from '../providers/offers/offers';
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
    PtFinderPage,
    ManageDealsPage,
    
  
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      scrollAssist: false,
      autoFocusAssit: false
    }),
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
    PtFinderPage,
    ManageDealsPage,
   
  
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Offers,
    Auth,
    WorkoutManagerProvider,
    TrainersProvider
  ]
})
export class AppModule {}
