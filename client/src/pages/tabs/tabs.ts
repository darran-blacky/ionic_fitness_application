import { Component } from '@angular/core';
import { IonicPage, NavParams } from 'ionic-angular';
import { Auth } from '../../providers/auth/auth'; 

export interface TabsInterface {
  title: string;
  tabComponent?: any;
  index?: number;
  icon: string;
}

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})

export class TabsPage {
  details : any;
  reg : Boolean = true;
   role_title: any;
   role_component: any;
   role_icon: any;
   myIndex: number;

   tab1Root: any = "DashboardPage"
   tab2Root: any = "WorkoutsPage"
   tab3Root: any;

  tabs: TabsInterface[] = [
    { title: 'Home',      tabComponent: 'DashboardPage',   icon: 'home' },
    { title: 'Workouts',  tabComponent: 'WorkoutsPage',    icon: 'analytics' }
    // { title: this.role_title, tabComponent: this.role_component,  icon: this.role_icon }
  ];

  
  constructor(navParams: NavParams,  public authService: Auth) {
    // Set the active tab based on the passed index from menu.ts
    this.myIndex = navParams.data.tabIndex || 0;
    this.details = this.authService.getUserDetails();



    var x = this.authService.getUserRole();
    
        // x = x.role;
        if(x == "regular"){
          
          this.role_title = "PT Finder";
          this.tab3Root   = "CurrentPtPage";
        
        }else {
        console.log(x + " -====== ROLE ---")
          this.role_title = "Clients";
          this.tab3Root   ="CurrentClientsPage";
        }
  }

  ionViewDidLoad() {

    
  }

}
