import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PtUserPage } from '../pt-user/pt-user'
import { TrainersProvider } from '../../providers/trainers/trainers'
import { Auth } from '../../providers/auth/auth';
/**
 * Generated class for the CurrentClientsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-current-clients',
  templateUrl: 'current-clients.html',
})
export class CurrentClientsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public authService: Auth,public trainerService : TrainersProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CurrentClientsPage');
  }

  clients(){
    this.navCtrl.setRoot(PtUserPage);
  }
}
