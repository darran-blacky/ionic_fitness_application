import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams , ModalController, AlertController,LoadingController } from 'ionic-angular';
import { Auth } from '../../providers/auth/auth';
import { WorkoutManagerProvider } from '../../providers/workout-manager/workout-manager';

/**
 * Generated class for the ExerciseListPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-exercise-list',
  templateUrl: 'exercise-list.html',
})
export class ExerciseListPage {
muscle:any;
exercises: any;
description: any;
constructor(public navCtrl: NavController, public navParams: NavParams , public workoutService: WorkoutManagerProvider, public modalCtrl: ModalController,
  public alertCtrl: AlertController, public authService: Auth, public loadingCtrl: LoadingController ) {
     this.muscle = navParams.get("muscle");
     console.log("muscle == ", this.muscle);
   
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ExerciseListPage');
    this.workoutService.getExercisesByGroup(this.muscle).then((data) => {
      this.exercises = data;
    console.log('exercises == ', data);
      
      }, (err) => {
          console.log("not allowed");
      });
  }

  getInfo(description){
  console.log(description);
      let alert = this.alertCtrl.create({
        title: 'Discription',
        subTitle: 'This will display information on how to do the exercises for :' + description + ".",
        buttons: ['Return']
      });
      alert.present();

  }

}
