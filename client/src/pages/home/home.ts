import { Component, ViewChild } from '@angular/core';
import { NavController, Slides ,LoadingController } from 'ionic-angular';
import { TutorialPage } from '../tutorial/tutorial';
import { Auth } from '../../providers/auth/auth'; 
import { SideMenuPage } from '../side-menu/side-menu'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})

export class HomePage {
  loading:  any;
  
  @ViewChild(Slides) slides: Slides;
  
  constructor(public navCtrl: NavController , public authService: Auth, public loadingCtrl: LoadingController) {
  }



  continue(){
    this.navCtrl.push(TutorialPage);
  }
 
  splash = true;
   
 
  ionViewDidLoad() {
    setTimeout(() => this.splash = false, 4000);

      // Check if already authenticated
      this.authService.checkAuthentication().then((res) => {
        console.log("Already authorized");
        // this.loading.dismiss();
        this.navCtrl.setRoot(SideMenuPage);
    }, (err) => {
        console.log("Not already authorized");
        // this.loading.dismiss();
    });

  }
 
  showLoader(){
    
           this.loading = this.loadingCtrl.create({
               content: 'Authenticating...'
           });
    
           this.loading.present();
    
       }
}
