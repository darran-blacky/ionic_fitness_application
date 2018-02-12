import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RegularUserPage } from './regular-user';

@NgModule({
  declarations: [
    RegularUserPage,
  ],
  imports: [
    IonicPageModule.forChild(RegularUserPage),
  ],
  exports: [
    RegularUserPage
  ]
})
export class RegularUserPageModule {}
