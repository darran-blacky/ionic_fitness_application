import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { SignupPage } from '../signup/signup';
import { Auth } from '../../providers/auth/auth'; 
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SideMenuPage } from '../side-menu/side-menu'

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
   email:    string;
   password: string;
   loading:  any;

   slideOneForm: FormGroup;
   slideTwoForm: FormGroup; 
   submitAttempt: boolean = false;

  constructor(public navCtrl: NavController, public formBuilder: FormBuilder,  public authService: Auth, public loadingCtrl: LoadingController) {
   
    this.slideOneForm = formBuilder.group({
        email: ['', Validators.compose([Validators.maxLength(70), Validators.pattern('^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$'), Validators.required])],
        password: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])]
    });  

}
  ionViewDidLoad() {

      this.showLoader();

      // Check if already authenticated
      this.authService.checkAuthentication().then((res) => {
          console.log("Already authorized");
          this.loading.dismiss();
          this.navCtrl.setRoot(SideMenuPage);
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
               this.navCtrl.setRoot(SideMenuPage);
           }, (err) => {
               this.loading.dismiss();
               console.log("\n\n *****" +err+ "\n\n");
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
