import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CurrentClientsPage } from './current-clients';

@NgModule({
  declarations: [
    CurrentClientsPage,
  ],
  imports: [
    IonicPageModule.forChild(CurrentClientsPage),
  ],
  exports: [
    CurrentClientsPage
  ]
})
export class CurrentClientsPageModule {}
