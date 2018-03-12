import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WorkoutExercisesPage } from './workout-exercises';

@NgModule({
  declarations: [
    WorkoutExercisesPage,
  ],
  imports: [
    IonicPageModule.forChild(WorkoutExercisesPage),
  ],
  exports: [
    WorkoutExercisesPage
  ]
})
export class WorkoutExercisesPageModule {}
