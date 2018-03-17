import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Auth } from '../../providers/auth/auth';
import { TrainersProvider } from '../../providers/trainers/trainers'

/**
 * Generated class for the PtFinderPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-pt-finder',
  templateUrl: 'pt-finder.html',
})
export class PtFinderPage {
  trainers: any
  constructor(public navCtrl: NavController, public navParams: NavParams, public authService: Auth,public trainerService : TrainersProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PtFinderPage');


    this.trainerService.getAvailableCoaches().then((data) => {
      this.trainers = data;
     console.log("data trainers ---- ===> : " , data);
     }, (err) => {
         console.log("not allowed : " );
     });
  }
}
