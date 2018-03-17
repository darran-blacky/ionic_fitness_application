import { Injectable } from '@angular/core';
import { Http , Headers  } from '@angular/http';
import { Auth } from '../auth/auth';
import 'rxjs/add/operator/map';

/*
  Generated class for the TrainersProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class TrainersProvider {

  constructor(public http: Http, public authService: Auth) {
    console.log('Hello TrainersProvider Provider');
  }

 getAvailableCoaches(){
       return new Promise((resolve, reject) => {
    
         let headers = new Headers();
         headers.append('Authorization', this.authService.token);
         
         this.http.get('http://localhost:8202/api/coaches/', {headers: headers} )
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
      
      this.http.get('http://localhost:8202/api/client/' + email, {headers: headers} )
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
    
    this.http.get('http://localhost:8202/api/trainer/' + id, {headers: headers} )
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
