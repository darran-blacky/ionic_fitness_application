import { Component } from "@angular/core";
import { NavController, ModalController, AlertController, LoadingController } from 'ionic-angular';
import { Offers } from '../../providers/offers/offers';
import { Auth } from '../../providers/auth/auth';
import { MainPage } from '../main/main';
import { TrainersProvider } from '../../providers/trainers/trainers'

/**
 * Generated class for the RegularUserPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-pt-user',
  templateUrl: 'pt-user.html',
})

export class PtUserPage {
  
    email: any;
    clients:any;
    loading: any;
   
    constructor(public navCtrl: NavController, public modalCtrl: ModalController,
      public alertCtrl: AlertController,public trainerService : TrainersProvider, public authService: Auth, public loadingCtrl: LoadingController) {
   this.email = authService.getUserEmail();
    }
   
    ionViewDidLoad(){
   
      this.trainerService.getCurrentClient(this.email).then((data) => {
          console.log("client data " , data);
          
        this.clients = data;
      }, (err) => {
          console.log("not allowed");
      });
   
    }
  }
