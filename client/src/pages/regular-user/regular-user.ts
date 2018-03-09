import { Component } from "@angular/core";
import { NavController,IonicPage, ModalController, AlertController, LoadingController } from 'ionic-angular';
import { Todos } from '../../providers/todos/todos';
import { Auth } from '../../providers/auth/auth';
import { MainPage } from '../main/main';
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

  todos: any;
  loading: any;
  userDetails: any;
  new_todo: any;

  constructor(public navCtrl: NavController, public todoService: Todos, public modalCtrl: ModalController,
    public alertCtrl: AlertController, public authService: Auth, public loadingCtrl: LoadingController) {
     this.userDetails = authService.getUserEmail();
  }
 
  ionViewDidLoad(){
 
    this.todoService.getTodos().then((data) => {
          this.todos = data;
    }, (err) => {
        console.log("not allowed");
    });
 
  }
 
  addTodo(){
 
    let prompt = this.alertCtrl.create({
      title: 'Add Todo',
      message: 'Describe your todo below:',
      inputs: [
        {
          name: 'title'
        }
      ],
      buttons: [
        {
          text: 'Cancel'
        },
        {
          text: 'Save',
          handler: todo => {
                if(todo){
                 
                  this.new_todo = {
                        title: todo.title,
                        name: this.userDetails
                  }

                console.log("SAVE TODO : -------> ", todo.title)
          
                    this.showLoader();
                    
                    this.todoService.createTodo(this.new_todo).then((result) => {
                      console.log("todo === " , this.new_todo);
                      
                        this.loading.dismiss();
                        this.todos = result;
                        console.log("todo created : " , result);
                    }, (err) => {
                        this.loading.dismiss();
                       
                    });
 
                }
 
 
          }
        }
      ]
    });
 
    prompt.present();
 
  }
 
  deleteTodo(todo){
 
    this.showLoader();
 
    //Remove from database
    this.todoService.deleteTodo(todo._id).then((result) => {
 
      this.loading.dismiss();
 
      //Remove locally
        let index = this.todos.indexOf(todo);
 
        if(index > -1){
            this.todos.splice(index, 1);
        }  
 
    }, (err) => {
      this.loading.dismiss();
        console.log("not allowed");
    });
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
 
}