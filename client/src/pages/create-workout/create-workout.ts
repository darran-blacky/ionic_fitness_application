import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams , ModalController, AlertController,LoadingController } from 'ionic-angular';
import { WorkoutManagerProvider } from '../../providers/workout-manager/workout-manager';
import { Auth } from '../../providers/auth/auth';
import { ToastController } from 'ionic-angular';

/**
 * Generated class for the CreateWorkoutPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-create-workout',
  templateUrl: 'create-workout.html',
})
export class CreateWorkoutPage {
  email:any;
  muscleGroups : {
              "Chest", 
              "Back",
              "Legs",
              "Shoulders",
              "Abs",
              "Arms"
            };
            selected_exercises2 : any;
  loading: any;
            
  selected_exercises : any;
  muscle_groups : String = "testing";
  title_name : any;
  workout = { title: "Untitled"} ;
  exercises : any;
  muscle : any;
  muscle_groups2: {} = [];
  constructor(public navCtrl: NavController, public navParams: NavParams , public workoutService: WorkoutManagerProvider, public modalCtrl: ModalController,
    public alertCtrl: AlertController, public authService: Auth, public loadingCtrl: LoadingController, private toastCtrl: ToastController ) {
      this.email = authService.getUserEmail();
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateWorkoutPage');
    this.email = this.authService.getUserEmail();
  }

  onChange(){
    
    this.workoutService.getExercisesByGroup(this.muscle_groups2).then((data) => {
      this.exercises = data;
      
      }, (err) => {
          console.log("not allowed");
      });
  }

  addToWorkout(){
 
    var k : String = this.selected_exercises + "";
    var s = k.split(",");
    var new_Workout = {
      title: this.workout.title,
      email: this.email,
      exercises: s
    }
    this.showLoader();
    console.log("adding ===  ", new_Workout );
    
      this.workoutService.createWorkout(new_Workout).then((result) => {
      
      this.loading.dismiss();
      this.presentToast();
      console.log("new workout ===  ",result);
  
      }, (err) => {
          console.log("not allowed");
      });
  }


  showLoader(){
 
    this.loading = this.loadingCtrl.create({
      content: 'Creating Workout...'
    });
 
    this.loading.present();
 
    setTimeout(() => {
      this.loading.dismiss();
    }, 5000);
  }

  presentToast() {
    let toast = this.toastCtrl.create({
      message: 'Workout was added successfully',
      duration: 3000,
      position: 'top'
    });
  
    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
    toast.setCssClass("my_toast");
    toast.present();
  }
 
}
