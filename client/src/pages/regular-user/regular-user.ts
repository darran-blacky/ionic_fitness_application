import { Component } from "@angular/core";
import { NavController,NavParams,IonicPage, ModalController, AlertController, LoadingController } from 'ionic-angular';
import { Offers } from '../../providers/offers/offers';
import { Auth } from '../../providers/auth/auth';
import { MainPage } from '../main/main';
import { ToastController } from 'ionic-angular';

/**
 * Generated class for the RegularUserPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-regular-user',
  templateUrl: 'regular-user.html',
})
export class RegularUserPage {

  offers: any;
  loading: any;
  userDetails: any;
  new_offer: any;
  v: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public offerService: Offers, public modalCtrl: ModalController,
    public alertCtrl: AlertController, public authService: Auth, public loadingCtrl: LoadingController,private toastCtrl: ToastController) {
   
    //  if(navParams.get("name") != null){
    //    this.userDetails = navParams.get("name");

    //  }else{
      this.userDetails = navParams.get("name");
      
    //  }

  }
 
  ionViewDidLoad(){
 
    this.offerService.getOffers(this.userDetails).then((data) => {
      console.log(" offers data == ", data);
      console.log(" offers data == ", data);
     
          this.offers = data;
    }, (err) => {
        console.log("not allowed");
    });
 
  }
 
  message(user){
 
    let prompt = this.alertCtrl.create({
      title: 'Add Offer',
      message: 'Describe your offer below:',
      inputs: [
        {
          name: 'title',
          placeholder: 'Description'
        },
        {
          name: 'price',
          placeholder: 'Price'
          
        }
      ],
      buttons: [
        {
          text: 'Cancel',
        },
        {
          text: 'Save',
          handler: offer => {
                if(offer){
                 
                  this.new_offer = {
                        title: offer.title,
                        name: this.userDetails,
                        price: offer.price
                  }

                console.log("WORKOUT Bought : -------> ", offer.title)
          
                    // this.showLoader();
                    
                    // this.offerService.createOffer(this.new_offer).then((result) => {
                    //   console.log("offer === " , this.new_offer);
                      
                    //     this.loading.dismiss();
                    //     this.offers = result;
                    //     this.presentToast(0);
      
                    //     console.log("offer created : " , result);
                    // }, (err) => {
                    //     this.loading.dismiss();
                       
                    // });
 
                }
 
 
          }
        }
      ],
      cssClass: "my-class"
    });
    
    prompt.present();
 
  }
 
  showLoader(){
 
    this.loading = this.loadingCtrl.create({
      content: 'Authenticating...'
    });
 
    this.loading.present();
 
  }
 
  logout(){
 
    this.authService.logout();
    this.navCtrl.setRoot(MainPage);
 
  }



  
  presentToast(option) {
    var toast_message : any;
    if(option >= 1 ){
      toast_message = 'Offer was removed successfully'
    }else{
      toast_message = 'Offer was added successfully'      
    }
    let toast = this.toastCtrl.create({
      message: toast_message,
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