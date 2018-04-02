import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PtFinderPage } from '../pt-finder/pt-finder'
import { TrainersProvider } from '../../providers/trainers/trainers'
import { Auth } from '../../providers/auth/auth';

 /**
 * Generated class for the CurrentPtPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-current-pt',
  templateUrl: 'current-pt.html',
})

export class CurrentPtPage {
  email : any;
  current: any;
  rating: any;


  constructor(public navCtrl: NavController, public navParams: NavParams, public authService: Auth,public trainerService : TrainersProvider) {
    this.email = authService.getUserEmail();
    this.rating = 0;
  

  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad CurrentPtPage');


    this.trainerService.getCurrentCoach(this.email).then((data) => {
      this.current = data;
     console.log("data client ---- ===> : " , data);
     }, (err) => {
         console.log("not allowed : " );
     });

  }

  search(){
    this.navCtrl.setRoot(PtFinderPage);
  }
}
