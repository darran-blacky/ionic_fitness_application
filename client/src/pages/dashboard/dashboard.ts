import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RegularUserPage } from '../regular-user/regular-user';
import { WorkoutsPage } from '../workouts/workouts'
// import { ExerciseGroupsPage } from '../exercise-groups/exercise-groups';
// import { CreateWorkoutPage } from '../create-workout/create-workout'
// import { ProfilePage } from '../profile/profile';

/**
 * Generated class for the DashboardPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})


export class DashboardPage {
  imageSource : String = "/Users/darranblackweir/Documents/workspace/Ionic_workspace/myfitnesshelper/client/src/assets/img/button_workouts.png";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DashboardPage');
  }
test(){
  try {
    this.navCtrl.push(RegularUserPage);  
   
  }
  catch(e) {
    console.log("Message is : ", e);
  }
  
}
go_to_workouts(){
  this.navCtrl.push(WorkoutsPage);  
}
  
  goto(page){
    this.navCtrl.push(page);
  }
}
