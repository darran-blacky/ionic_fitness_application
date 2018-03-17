import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ManageDealsPage } from './manage-deals';

@NgModule({
  declarations: [
    ManageDealsPage,
  ],
  imports: [
    IonicPageModule.forChild(ManageDealsPage),
  ],
  exports: [
    ManageDealsPage
  ]
})
export class ManageDealsPageModule {}
