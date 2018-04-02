import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Nav } from 'ionic-angular';
import { TabsPage } from './../tabs/tabs';
import { Auth } from '../../providers/auth/auth';
import { MainPage } from '../main/main';
import { SideMenuPage } from '../side-menu/side-menu'

/**
 * Generated class for the ProfilePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})


export class ProfilePage {
  // details1 : any;
  email: any;
  details : any;
  target: any;
  goals: any;
  
  
constructor(public navCtrl: NavController, public navParams: NavParams, public authService: Auth) {
  // this.email = this.authService.getUserEmail();
    //  this.details1 = authService.getUser(this.email);
     this.details = authService.getUserDetails();
     this.goals = authService.getUserGoals();
     this.onChange();
     
  console.log("details ==   ",this.details);
  // console.log("details2 ==   ",this.details1);
  
  }
  SideMenuPage
  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

       
  update(){
      
    this.navCtrl.setRoot(SideMenuPage);
    
   }
   onChange(){
    if(this.goals.toString() == "lose"){
      this.target = "2500";
   }
   else if(this.goals.toString() == "maintain"){
    this.target = "2800";
   }
   else
   this.target = "3200";
   }

}
