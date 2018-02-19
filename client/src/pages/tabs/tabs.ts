import { Component } from '@angular/core';
import { IonicPage, NavParams } from 'ionic-angular';
 
@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
  tab1Root: any = 'NutritionPage';
  tab2Root: any = 'WorkoutsPage';
  tab3Root: any = 'RegularUserPage';
  myIndex: number;
 
  constructor(navParams: NavParams) {
    // Set the active tab based on the passed index from menu.ts
    this.myIndex = navParams.data.tabIndex || 0;
  }
}
