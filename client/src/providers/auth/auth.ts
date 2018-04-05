import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Storage } from '@ionic/storage';
import 'rxjs/add/operator/map';
import { url } from '../config';


@Injectable()
export class Auth {

  public token: any;

  public URL : any ;

  public current_user: any;
  constructor(public http: Http, private storage: Storage) {
//  , public storage: Storage
     this.URL = url.toString();
  }
 
  checkAuthentication(){
 
    return new Promise((resolve, reject) => {
 
        //Load token if exists
        this.storage.get('token').then((value) => {
 
            this.token = value;
            console.log("token ====== " ,this.storage.get('token'))
            console.log("token2 ====== " ,this.storage.get('token'))
            
            // this.current_user = this.storage.get('user');
            let headers = new Headers();
            headers.append('Authorization', this.token);
 
            this.http.get( this.URL +'api/auth/protected', {headers: headers})
                .subscribe(res => {
                    resolve(res);
                }, (err) => {
                    reject(err);
                });
 
        });        
 
    });
 
  }
 
  createAccount(details){
 
    return new Promise((resolve, reject) => {
 
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
 
        this.http.post(this.URL + 'api/auth/register', JSON.stringify(details), {headers: headers})
          .subscribe(res => {
 
            let data = res.json();
            this.token = data.token;
            this.storage.set('token', data.token);
            this.storage.set('user', data.user.email);
            
            resolve(data);
 
          }, (err) => {
            reject(err);
          });
 
    });
 
  }
 
  login(credentials){
 
    return new Promise((resolve, reject) => {
 
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
       
        this.http.post( this.URL +'api/auth/login', JSON.stringify(credentials), {headers: headers})
          .subscribe(res => {
            this.current_user = credentials.email;
            let data = res.json();
            console.log("TESTER!!!!", data.token)
            this.token = data.token;
            this.storage.set('token', data.token);
            this.storage.set('user', credentials.email);
            
            resolve(data);
 
            resolve(res.json());
          }, (err) => {
            reject(err);
          });
 
    });
 
  }
 
  logout(){
    this.storage.set('token', '');
    // this.current_user = "";
  }

   getUserDetails(){
    let payload;
    const token = this.token;
    if(token){
      payload = token.split('.')[1];
      payload = window.atob(payload);
      return JSON.parse(payload);      
    }
    else {
      return null ; 
    }
   }
   getUserEmail(){
    let payload;
    const token = this.token;
    if(token){
      payload = token.split('.')[1];
      payload = window.atob(payload);
      return JSON.parse(payload).email;      
    }
    else {
      return "Couldn't get user email!!!" ; 
    }
   }
   getUserName(){
    let payload;
    const token = this.token;
    if(token){
      payload = token.split('.')[1];
      payload = window.atob(payload);
      return JSON.parse(payload).name;      
    }
    else {
      return "Couldn't get user name!!!" ; 
    }
   }
   getUserRole(){
    let payload;
    const token = this.token;
    if(token){
      payload = token.split('.')[1];
      payload = window.atob(payload);
      return JSON.parse(payload).role;      
    }
    else {
      return "Couldn't get user's role!!!!!!" ; 
    }
   }

   getUserWeight(){
    let payload;
    const token = this.token;
    if(token){
      payload = token.split('.')[1];
      payload = window.atob(payload);
      return JSON.parse(payload).weight;      
    }
    else {
      return "Couldn't get user's weight!!!!!!" ; 
    }
   }

   getUserGoals(){
    let payload;
    const token = this.token;
    if(token){
      payload = token.split('.')[1];
      payload = window.atob(payload);
      return JSON.parse(payload).goals;      
    }
    else {
      return "Couldn't get user's goals!!!!!!" ; 
    }
 
  }


  updateWeight(details){
 
    return new Promise((resolve, reject) => {
 
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', this.token);

        this.http.post(this.URL + 'api/users/update', JSON.stringify(details), {headers: headers})
        .map(res => res.json())
        .subscribe(res => {
            resolve(res);
          }, (err) => {
            reject(err);
          });
    });
 
  }

  getUser(arg){
    return new Promise((resolve, reject) => {

      let headers = new Headers();
      headers.append('Authorization', this.token);
      
      this.http.get( this.URL +'api/users/' + this.getUserEmail(), {headers: headers} )
      .map(res => res.json())
      .subscribe(data => {
        if(arg = "1"){
          console.log("get User weight ==  " ,data.weight)
          resolve(data.weight);
        }else if(arg == "2"){
          console.log("get User goals ==  " ,data.goals)
          resolve(data.goals);
        }else
        console.log("get User data ==  " ,data.weight)
       resolve(data);
      }, (err) => {
        console.log("ERROR !!@!@,   " ,err)
        reject(err);
      });
  });  
}  
}