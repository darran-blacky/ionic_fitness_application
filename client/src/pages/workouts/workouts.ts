import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams , ModalController, AlertController,LoadingController } from 'ionic-angular';
import { WorkoutManagerProvider } from '../../providers/workout-manager/workout-manager';
import { Auth } from '../../providers/auth/auth';


/**
 * Generated class for the WorkoutsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-workouts',
  templateUrl: 'workouts.html',
})
export class WorkoutsPage {
  
  names: any;
  loading: any;

  constructor(public navCtrl: NavController, public navParams: NavParams , public workoutService: WorkoutManagerProvider, public modalCtrl: ModalController,
    public alertCtrl: AlertController, public authService: Auth, public loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WorkoutsPage');

    this.workoutService.getExercises().then((data) => {
      this.names = data;
      }, (err) => {
          console.log("not allowed");
      });
  }

}
