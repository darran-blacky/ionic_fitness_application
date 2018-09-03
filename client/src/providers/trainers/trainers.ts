import { Injectable } from '@angular/core';
import { Http , Headers  } from '@angular/http';
import { Auth } from '../auth/auth';
import 'rxjs/add/operator/map';
import { url } from '../config';

/*
  Generated class for the TrainersProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class TrainersProvider {

  public URL : any ;
  
  constructor(public http: Http, public authService: Auth) {
    console.log('Hello TrainersProvider Provider');
    this.URL = url.toString();
    
  }

 getAvailableCoaches(){
       return new Promise((resolve, reject) => {
    
         let headers = new Headers();
         headers.append('Authorization', this.authService.token);
         
         this.http.get( this.URL +'api/coaches/', {headers: headers} )
         .map(res => res.json())
         .subscribe(data => {
          
          resolve(data.coaches);
         }, (err) => {
           console.log("ERROR !!@!@,   " ,err)
           reject(err);
         });
     });  
  }

  getCurrentCoach(email){
    return new Promise((resolve, reject) => {
 
      let headers = new Headers();
      headers.append('Authorization', this.authService.token);
      
      this.http.get( this.URL +'api/client/' + email, {headers: headers} )
      .map(res => res.json())
      .subscribe(data => {
 
       resolve(data.coach.name);
      }, (err) => {
        console.log("ERROR !!@!@,   " ,err)
        resolve(err);
      });
  });  
}

getCurrentCoach_img(email){
  return new Promise((resolve, reject) => {

    let headers = new Headers();
    headers.append('Authorization', this.authService.token);
    
    this.http.get( this.URL +'api/client/' + email, {headers: headers} )
    .map(res => res.json())
    .subscribe(data => {
    
     resolve(data.coach.img);
    }, (err) => {
      resolve(err);
    });
});  
}

getCurrentCoach_email(email){
  return new Promise((resolve, reject) => {

    let headers = new Headers();
    headers.append('Authorization', this.authService.token);
    
    this.http.get( this.URL +'api/client/' + email, {headers: headers} )
    .map(res => res.json())
    .subscribe(data => {
    
     resolve(data.coach.email);
    }, (err) => {
      console.log("ERROR !!@!@,   " ,err)
      reject(err);
    });
});  
}

getCurrentClient(id){
  return new Promise((resolve, reject) => {

    let headers = new Headers();
    headers.append('Authorization', this.authService.token);
    
    this.http.get( this.URL +'api/trainer/' + id, {headers: headers} )
    .map(res => res.json())
    .subscribe(data => {
     
     resolve(data.clients);
    }, (err) => {
      console.log("ERROR !!@!@,   " ,err)
      reject(err);
    });
});  
}

}
