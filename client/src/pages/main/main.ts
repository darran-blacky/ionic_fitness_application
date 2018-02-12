import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { SignupPage } from '../signup/signup';
import { Auth } from '../../providers/auth/auth'; 
// import { Router } from '@angular/router';
import { RegularUserPage } from '../regular-user/regular-user';

/**
 * Generated class for the MainPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-main',
  templateUrl: 'main.html',
})
export class MainPage {
  email: string;
  password: string;
  loading: any;

  // constructor(public navCtrl: NavController, public authService: Auth, public loadingCtrl: LoadingController) {

  // }
  constructor(public navCtrl: NavController,  public authService: Auth, public loadingCtrl: LoadingController) {
  }
  ionViewDidLoad() {

      this.showLoader();

      // Check if already authenticated
      this.authService.checkAuthentication().then((res) => {
          console.log("Already authorized");
          this.loading.dismiss();
          this.navCtrl.setRoot(RegularUserPage);
      }, (err) => {
          console.log("Not already authorized");
          this.loading.dismiss();
      });

  }
 
  login(){
    
           this.showLoader();
    
           let credentials = {
               email: this.email,
               password: this.password
           };
    
           this.authService.login(credentials).then((result) => {
               this.loading.dismiss();
               console.log(result);
               this.navCtrl.setRoot(RegularUserPage);
           }, (err) => {
               this.loading.dismiss();
               console.log(err);
           });
    
       }
    
       launchSignup(){
           this.navCtrl.push(SignupPage);
       }
    
       showLoader(){
    
           this.loading = this.loadingCtrl.create({
               content: 'Authenticating...'
           });
    
           this.loading.present();
    
       }
    
   }
