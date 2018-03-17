import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CurrentPtPage } from './current-pt';

@NgModule({
  declarations: [
    CurrentPtPage,
  ],
  imports: [
    IonicPageModule.forChild(CurrentPtPage),
  ],
  exports: [
    CurrentPtPage
  ]
})
export class CurrentPtPageModule {}
