import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ExerciseGroupsPage } from './exercise-groups';

@NgModule({
  declarations: [
    ExerciseGroupsPage,
  ],
  imports: [
    IonicPageModule.forChild(ExerciseGroupsPage),
  ],
  exports: [
    ExerciseGroupsPage
  ]
})
export class ExerciseGroupsPageModule {}
