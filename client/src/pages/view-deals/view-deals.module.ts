import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ViewDealsPage } from './view-deals';

@NgModule({
  declarations: [
    ViewDealsPage,
  ],
  imports: [
    IonicPageModule.forChild(ViewDealsPage),
  ],
  exports: [
    ViewDealsPage
  ]
})
export class ViewDealsPageModule {}
