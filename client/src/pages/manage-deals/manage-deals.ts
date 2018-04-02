import { Component } from "@angular/core";
import { NavController,NavParams,IonicPage, ModalController, AlertController, LoadingController } from 'ionic-angular';
import { Offers } from '../../providers/offers/offers';
import { Auth } from '../../providers/auth/auth';
import { MainPage } from '../main/main';
import { ToastController } from 'ionic-angular';
/**
 * Generated class for the ManageDealsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-manage-deals',
  templateUrl: 'manage-deals.html',
})
export class ManageDealsPage {
  offers: any;
  loading: any;
  userDetails: any;
  new_offer: any;
  v: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public offerService: Offers, public modalCtrl: ModalController,
    public alertCtrl: AlertController, public authService: Auth, public loadingCtrl: LoadingController,private toastCtrl: ToastController) {

      this.userDetails = authService.getUserEmail();
     
  }
 
  ionViewDidLoad(){
    
    this.fetchOffers();
 
  }
 
  addOffer(){
 
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

                console.log("SAVE OFFER : -------> ", offer.title)
          
                    this.showLoader();
                    
                    this.offerService.createOffer(this.new_offer).then((result) => {
                      console.log("offer === " , this.new_offer);
                      
                        this.loading.dismiss();
                        this.fetchOffers();
                        this.presentToast(0);
      
                        console.log("offer created : " , result);
                    }, (err) => {
                        this.loading.dismiss();
                       
                    });
 
                }
 
 
          }
        }
      ],
      cssClass: "my-class"
    });
    
    prompt.present();
 
  }
 
  deleteOffer(offer){
 
    this.showLoader();
 
    //Remove from database
    this.offerService.deleteOffer(offer._id).then((result) => {
 
      this.loading.dismiss();
      this.presentToast(1);
      //Remove locally
        let index = this.offers.indexOf(offer);
 
        if(index > -1){
            this.offers.splice(index, 1);
        }  
 
    }, (err) => {
      this.loading.dismiss();
        console.log("not allowed");
    });
  }
 
  showLoader(){
 
    this.loading = this.loadingCtrl.create({
      content: 'Creating Offer...'
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
 

  fetchOffers(){

    this.offerService.getOffers(this.userDetails).then((data) => {
 
          this.offers = data;

    }, (err) => {

        console.log("not allowed");

    });

  }
}