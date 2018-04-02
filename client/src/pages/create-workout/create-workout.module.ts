import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreateWorkoutPage } from './create-workout';

@NgModule({
  declarations: [
    CreateWorkoutPage,
  ],
  imports: [
    IonicPageModule.forChild(CreateWorkoutPage),
  ],
  exports: [
    CreateWorkoutPage
  ]
})
export class CreateWorkoutPageModule {}
