import { Component } from '@angular/core';
import { NavController, IonicPage,  LoadingController } from 'ionic-angular';
import { Auth } from '../../providers/auth/auth';
import { HomePage } from '../home/home';
import { RegularUserPage } from '../regular-user/regular-user';
import { PtUserPage } from '../pt-user/pt-user';
import { DashboardPage } from '../dashboard/dashboard';

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
  pattern = "A";
  myForm: any;

  constructor(public navCtrl: NavController, public authService: Auth, public loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {}
  register(){

    this.showLoader();

   if(!this.password.includes(this.pattern)){


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
        this.navCtrl.setRoot(DashboardPage);
      }
      else
      this.navCtrl.setRoot(DashboardPage);
    }, (err) => {
        this.loading.dismiss();
    });
 
  }
}
else 
  showLoader(){
 
    this.loading = this.loadingCtrl.create({
      content: 'Authenticating...'
    });
 
    this.loading.present();
 
  }
 
}