import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ExerciseListPage } from '../exercise-list/exercise-list';

/**
 * Generated class for the ExerciseGroupsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-exercise-groups',
  templateUrl: 'exercise-groups.html',
})
export class ExerciseGroupsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ExerciseGroupsPage');
  }
  ViewExercise(selected_muscle){
    console.log('ADDED : ', selected_muscle);

    this.navCtrl.push(ExerciseListPage, {
      muscle: selected_muscle
    })
    
  }
}
