import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PtUserPage } from './pt-user';

@NgModule({
  declarations: [
    PtUserPage,
  ],
  imports: [
    IonicPageModule.forChild(PtUserPage),
  ],
  exports: [
    PtUserPage
  ]
})
export class PtUserPageModule {}
