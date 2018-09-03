import { Component } from '@angular/core';
import { NavController, IonicPage,  LoadingController } from 'ionic-angular';
import { Auth } from '../../providers/auth/auth';
// import { HomePage } from '../home/home';
// import { RegularUserPage } from '../regular-user/regular-user';
// import { PtUserPage } from '../pt-user/pt-user';
// import { DashboardPage } from '../dashboard/dashboard';
import { SideMenuPage } from '../side-menu/side-menu'
import { MainPage } from '../main/main';

@IonicPage()
@Component({
  selector: 'signup-page',
  templateUrl: 'signup.html'
})
export class SignupPage {
 
  role: string;
  email: string;
  name: string;
  password: string;
  loading: any;
  pattern = "A";
  myForm: any;
  img: any = "../../assets/img/bg.jpg";
  age: any;
  goals: any;
  weight: any;
  
  constructor(public navCtrl: NavController, public authService: Auth, public loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {}
  register(){

    this.showLoader();

   if(!this.password.includes(this.pattern)){


    let details = {
        email: this.email,
        name: this.name,
        password: this.password,
        role: this.role,
        age: this.age,
        img: this.img,
        goals: this.goals,
        weight: this.weight


    };
    this.authService.createAccount(details).then((result) => {
      this.loading.dismiss();
      console.log(result);
      console.log("IF " + this.role + " == personal Trainer" );
      this.navCtrl.setRoot(SideMenuPage);
    }, (err) => {
        this.loading.dismiss();
    });
 
  }
}
 
  showLoader(){
 
    this.loading = this.loadingCtrl.create({
      content: 'Authenticating...'
    });
 
    this.loading.present();
 
  }
  launchSignIn(){
    this.navCtrl.setRoot(MainPage);
  }
}