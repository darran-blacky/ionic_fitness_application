import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams , ModalController, AlertController,LoadingController } from 'ionic-angular';
import { WorkoutManagerProvider } from '../../providers/workout-manager/workout-manager';
import { Auth } from '../../providers/auth/auth';
import { WorkoutExercisesPage } from '../workout-exercises/workout-exercises'


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
  email: any;
  exercises: any;
  test: any;
  constructor(public navCtrl: NavController, public navParams: NavParams , public workoutService: WorkoutManagerProvider, public modalCtrl: ModalController,
    public alertCtrl: AlertController, public authService: Auth, public loadingCtrl: LoadingController ) {
      this.email = authService.getUserEmail();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WorkoutsPage');

    this.workoutService.getExercises().then((data) => {
        this.exercises = data;
        console.log("get exercises ===-----....",data);
        
        }, (err) => {
            console.log("not allowed");
        });

       

        this.workoutService.getWorkout(this.email).then((data) => {
          console.log("getWorkout ===-----....",data);
          
          
          this.names = data;
          }, (err) => {
              console.log("not allowed -----....",err);
          });
  
  }
  newPage(x){
    console.log("SELECTED :",x);
    
  }

  display(workout_page, e1){

    this.workoutService.getWorkoutExercises(workout_page).then((data) => {
      this.test = data;
      console.log("get workout exercises ",data);
      
      }, (err) => {
          console.log("not allowed");
      });
    

    this.navCtrl.push(WorkoutExercisesPage, {
      name: workout_page,
      exercises: e1,
      email: this.email
    })
    
  }


addExercise(){    
       let prompt = this.alertCtrl.create({
         title: 'Exercises',
         message: 'Select exercises below:',
         inputs: [
           {
             label: 'text'
           }
           
         ],
         buttons: [
           {
             text: 'Cancel'
           },
           {
             text: 'Add',
          
           }
         ]
       });
    
       prompt.present();
    
}
}
