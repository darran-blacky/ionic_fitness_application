import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { WorkoutManagerProvider } from '../../providers/workout-manager/workout-manager';

/**
 * Generated class for the WorkoutExercisesPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-workout-exercises',
  templateUrl: 'workout-exercises.html',
})
export class WorkoutExercisesPage {
  selected_workout : any;
  exercises: any ;
  email: any;

  t: any;
  constructor(public navCtrl: NavController, public navParams: NavParams,  public workoutService: WorkoutManagerProvider) {
    this.selected_workout = navParams.get("name");
    // this.exercises = navParams.get("exercises");
    this.email = navParams.get("email");
    
    
    console.log('ionViewDidLoad WorkoutExercisesPage');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WorkoutExercisesPage ' , this.selected_workout);


    this.workoutService.getWorkoutExercises(this.selected_workout).then((data) => {
       this.exercises = data;
      console.log("data 3---- ===> : " , data);
      

      }, (err) => {
          console.log("not allowed : " , this.selected_workout);
      });

      // console.log("workout name ",this.selected_workout);
      // console.log("workout exercises page *****_1_***** ",this.exercises);
      // console.log("workout exercise page *****_2_*****  ", this.exercises[1].title);
      
  }

 
}
