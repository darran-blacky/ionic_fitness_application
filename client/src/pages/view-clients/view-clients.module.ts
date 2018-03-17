import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ViewClientsPage } from './view-clients';

@NgModule({
  declarations: [
    ViewClientsPage,
  ],
  imports: [
    IonicPageModule.forChild(ViewClientsPage),
  ],
  exports: [
    ViewClientsPage
  ]
})
export class ViewClientsPageModule {}
