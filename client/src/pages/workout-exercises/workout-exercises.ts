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

  constructor(public navCtrl: NavController, public navParams: NavParams,  public workoutService: WorkoutManagerProvider) {
    this.selected_workout = navParams.get("name");
    this.exercises = navParams.get("exercises");
    this.email = navParams.get("email");
    
    
    console.log('ionViewDidLoad WorkoutExercisesPage');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WorkoutExercisesPage ' , this.selected_workout);


    // this.workoutService.getWorkoutExercises(this.selected_workout).then((data) => {
    //   //  this.names = data;
    //   console.log("data getWorkoutExercises()===> : " , data);
      
    //   // for( var thing in data){
    //   //   names.push(data.workout)
    //   // }
    //   }, (err) => {
    //       console.log("not allowed : " , this.selected_workout);
    //   });

      // console.log("workout name ",this.selected_workout);
      console.log("workout exercises params ",this.exercises);
      console.log("workout exercises params ",this.exercises[1]);
      
  }

 
}
