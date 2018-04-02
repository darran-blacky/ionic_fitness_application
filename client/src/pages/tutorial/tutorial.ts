import { Component, ViewChild, trigger, transition, style, state, animate, keyframes } from '@angular/core';
import { NavController, Slides,LoadingController  } from 'ionic-angular';
import { MainPage } from '../main/main';
import { Auth } from '../../providers/auth/auth'; 
import { SideMenuPage } from '../side-menu/side-menu'

/**
 * Generated class for the TutorialPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-tutorial',
  templateUrl: 'tutorial.html',
  animations: [

    trigger('bounce', [
      state('*', style({
        transform: 'translateX(0)'
      })),
      transition('* => rightSwipe', animate('700ms ease-out', keyframes([
        style({transform: 'translateX(0)', offset: 0}),
        style({transform: 'translateX(-65px)', offset: .3}),
        style({transform: 'translateX(0)', offset: 1})
      ]))),
      transition('* => leftSwipe', animate('700ms ease-out', keyframes([
        style({transform: 'translateX(0)', offset: 0}),
        style({transform: 'translateX(65px)', offset: .3}),
        style({transform: 'translateX(0)', offset: 1})
      ])))
    ])
  ]
})

export class TutorialPage {
  
  @ViewChild(Slides) slides: Slides;
  skipMsg: string = "Skip";
  state: string = 'x';
  loading:  any;

    constructor(public navCtrl: NavController,public authService: Auth, public loadingCtrl: LoadingController) {
    }
   splash = true;
  
    ionViewDidLoad() {
      setTimeout(() => this.splash = false, 4000);
      console.log('ionViewDidLoad TutorialPage');
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

    skip() {
      this.navCtrl.push(MainPage);
    }
  
    slideChanged() {
      if (this.slides.isEnd())
        this.skipMsg = "Alright, I got it";
    }
  
    slideMoved() {
      if (this.slides.getActiveIndex() >= this.slides.getPreviousIndex())
        this.state = 'rightSwipe';
      else
        this.state = 'leftSwipe';
    }
  
    animationDone() {
      this.state = 'x';
    }

  
  

  showLoader(){
    
           this.loading = this.loadingCtrl.create({
               content: 'Authenticating...'
           });
    
           this.loading.present();
    
       }
  }
