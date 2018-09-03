import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PtFinderPage } from '../pt-finder/pt-finder'
import { TrainersProvider } from '../../providers/trainers/trainers'
import { Auth } from '../../providers/auth/auth';

 /**
 * Generated class for the CurrentPtPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-current-pt',
  templateUrl: 'current-pt.html',
})

export class CurrentPtPage {
  email : any;
  trainers: any;
  rating: any;
  name: any;
  img: any;
  

  constructor(public navCtrl: NavController, public navParams: NavParams, public authService: Auth,public trainerService : TrainersProvider) {
    this.email = authService.getUserEmail();
    this.rating = 0;
    
    
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad CurrentPtPage');
    try {

      this.trainerService.getCurrentCoach(this.email).then((data) => {
        this.name = data;
       }, (err) => {
      this.name = "No Coach";
           console.log("not allowed : " );
       });
  
       this.trainerService.getCurrentCoach_email(this.email).then((data) => {
        this.email = data;
       }, (err) => {
      this.email = "";
         
           console.log("not allowed : " );
       });
  
       this.trainerService.getCurrentCoach_img(this.email).then((data) => {
        this.img = data;
       }, (err) => {
      this.img = "../../assets/img/images.jpeg";
         
           console.log("not allowed : " );
       });
     
    }
    catch(e) {
      this.name = "No Coach";
      this.email = "";
      this.img = "../../assets/img/images.jpeg";
      console.log(e);
    }

  
  }

  search(){
    this.navCtrl.setRoot(PtFinderPage);
  }

  
}
