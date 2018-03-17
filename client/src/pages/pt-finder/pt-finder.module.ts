import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PtFinderPage } from './pt-finder';

@NgModule({
  declarations: [
    PtFinderPage,
  ],
  imports: [
    IonicPageModule.forChild(PtFinderPage),
  ],
  exports: [
    PtFinderPage
  ]
})
export class PtFinderPageModule {}
