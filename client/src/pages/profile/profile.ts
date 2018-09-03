import { Component } from '@angular/core';
import { IonicPage, NavController,LoadingController } from 'ionic-angular';
// import { TabsPage } from './../tabs/tabs';
import { Auth } from '../../providers/auth/auth';
// import { MainPage } from '../main/main';
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
  details : any = {};
  target: any;
  goals: any;
  weight: any;
  loading: any;
  current_weight: any;
  constructor(public navCtrl: NavController, public authService: Auth, public loadingCtrl: LoadingController) {

 // this.email = this.authService.getUserEmail();
    this.details = authService.getUserDetails();
    this.goals   = authService.getUserGoals();
    this.email   = authService.getUserEmail();
    // this.current_weight = this.authService.getUserWeight();
    this.refresh();
    
  console.log("details ==   ",this.details);
  // console.log("details2 ==   ",this.details1);
  
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

       
  update(){
  
      this.showLoader();
  
      let details = {
          email: this.email,
          goals: this.goals,
          weight: this.weight
      };

      console.log("email == ", this.email);
      console.log("goals == ", this.goals);
      console.log("weight == ", this.weight);
      
      this.authService.updateWeight(details).then((result) => {
        console.log("RESULT == " ,result)
        this.loading.dismiss();
        this.refresh();
        this.navCtrl.setRoot(SideMenuPage);
      }, (err) => {
          this.loading.dismiss();
      });
   
    
  
    // this.navCtrl.setRoot(SideMenuPage);
    
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


showLoader(){
 
  this.loading = this.loadingCtrl.create({
    content: 'Updating Data...'
  });

  this.loading.present();

}

 async refresh(){
    this.current_weight = await this.authService.getUser("1");
    this.goals          = await this.authService.getUser("2");
    
    
    this.onChange();
  }
}