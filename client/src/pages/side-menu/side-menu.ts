import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Nav } from 'ionic-angular';
// import { TabsPage } from './../tabs/tabs';
import { Auth } from '../../providers/auth/auth';
import { MainPage } from '../main/main';
import { ProfilePage } from '../profile/profile';
/**
 * Generated class for the SideMenuPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

export interface PageInterface {
  title: string;
  pageName: string;
  tabComponent?: any;
  index?: number;
  icon: string;
}

@IonicPage()
@Component({
  selector: 'page-side-menu',
  templateUrl: 'side-menu.html',
})

export class SideMenuPage {
  email: any;
  details : any;
  weight: any;
  
  rootPage = 'TabsPage';
    pages: PageInterface[] = [
      { title: 'Tab 1', pageName: 'TabsPage', tabComponent: 'Tab1Page', index: 0, icon: 'home' },
      { title: 'Tab 2', pageName: 'TabsPage', tabComponent: 'Tab2Page', index: 1, icon: 'contacts' },
      { title: 'Tab 3', pageName: 'TabsPage', tabComponent: 'Tab3Page', index: 2, icon: 'clipboard' }
    ];
 
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public authService: Auth) {
     this.details = authService.getUserDetails();
     this.weight = authService.getUser("1");
console.log("details ==   ",this.details);

  }

  ionViewDidLoad() {
    console.log(this.details);
    this.refresh();
    
  }


  @ViewChild(Nav) nav: Nav;
  
  openPage(page: PageInterface) {
    let params = {};
 
    // The index is equal to the order of our tabs inside tabs.ts
    if (page.index) {
      params = { tabIndex: page.index };
    }
 
    // The active child nav is our Tabs Navigation
    if (this.nav.getActiveChildNav() && page.index != undefined) {
      this.nav.getActiveChildNav().select(page.index);
    } else {
      // Tabs are not active, so reset the root page 
      // In this case: moving to or from SpecialPage
      this.nav.setRoot(page.pageName, params);
    }
  }
 
  isActive(page: PageInterface) {
    // Again the Tabs Navigation
    let childNav = this.nav.getActiveChildNav();
 
    if (childNav) {
      if (childNav.getSelected() && childNav.getSelected().root === page.tabComponent) {
        return 'primary';
      }
      return;
    }
 
    // Fallback needed when there is no active childnav (tabs not active)
    if (this.nav.getActive() && this.nav.getActive().name === page.pageName) {
      return 'primary';
    }
    return;
  }
  logout(){
    
       this.authService.logout();
       this.navCtrl.setRoot(MainPage);
    
     }
     
  update(){
      
      this.navCtrl.setRoot(ProfilePage);
      
     }
     async refresh(){
        this.weight = await this.authService.getUser("1");
       
     }
}
