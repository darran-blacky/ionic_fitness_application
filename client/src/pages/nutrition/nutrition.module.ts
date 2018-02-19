import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NutritionPage } from './nutrition';

@NgModule({
  declarations: [
    NutritionPage,
  ],
  imports: [
    IonicPageModule.forChild(NutritionPage),
  ],
  exports: [
    NutritionPage
  ]
})
export class NutritionPageModule {}
