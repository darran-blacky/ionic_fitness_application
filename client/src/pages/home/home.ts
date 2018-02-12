import { Component, ViewChild, trigger, transition, style, state, animate, keyframes } from '@angular/core';
import { NavController, Slides } from 'ionic-angular';
import { TutorialPage } from '../tutorial/tutorial';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  @ViewChild(Slides) slides: Slides;
  

  constructor(public navCtrl: NavController) {

  }

  continue(){
    this.navCtrl.push(TutorialPage);
   }
 
   splash = true;
   
 
   ionViewDidLoad() {
     setTimeout(() => this.splash = false, 4000);
   }
 
 
}
