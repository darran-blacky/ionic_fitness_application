import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Auth } from '../../providers/auth/auth';
import { TrainersProvider } from '../../providers/trainers/trainers'
// import { ManageDealsPage } from '../manage-deals/manage-deals';
import { RegularUserPage } from '../regular-user/regular-user';
import { CurrentPtPage } from '../current-pt/current-pt';



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
  userDetails: any

  constructor(public navCtrl: NavController, public navParams: NavParams, public authService: Auth,public trainerService : TrainersProvider) {
    this.userDetails = navParams.get("name");  
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

  viewDeals(trainer){
    console.log(" trainers ---- ===> : " , trainer);

    this.navCtrl.push(RegularUserPage, {
      name: trainer
      
    })
  }
  goBack(){
    this.navCtrl.push(CurrentPtPage);
  }
}
