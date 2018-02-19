import { Component } from '@angular/core';
import { NavController, IonicPage,  LoadingController } from 'ionic-angular';
import { Auth } from '../../providers/auth/auth';
import { HomePage } from '../home/home';
import { RegularUserPage } from '../regular-user/regular-user';
import { PtUserPage } from '../pt-user/pt-user';

@IonicPage()
@Component({
  selector: 'signup-page',
  templateUrl: 'signup.html'
})
export class SignupPage {
 
  role: string;
  email: string;
  password: string;
  loading: any;
  constructor(public navCtrl: NavController, public authService: Auth, public loadingCtrl: LoadingController) {
  }
  ionViewDidLoad() {}
  register(){
 
    this.showLoader();
 
    let details = {
        email: this.email,
        password: this.password,
        role: this.role
    };
 
    this.authService.createAccount(details).then((result) => {
      this.loading.dismiss();
      console.log(result);
      console.log("IF " + this.role + " == personal Trainer" );
      if(this.role == "personal Trainer") {
        this.navCtrl.setRoot(PtUserPage);
      }
      else
      this.navCtrl.setRoot(RegularUserPage);
    }, (err) => {
        this.loading.dismiss();
    });
 
  }
 
  showLoader(){
 
    this.loading = this.loadingCtrl.create({
      content: 'Authenticating...'
    });
 
    this.loading.present();
 
  }
 
}