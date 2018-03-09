import { Injectable } from '@angular/core';
import { Auth } from '../auth/auth';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the WorkoutManagerProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class WorkoutManagerProvider {

  constructor(public http: Http, public authService: Auth) {
    console.log('Hello WorkoutManagerProvider Provider');
  }
  getExercises(){
    
       return new Promise((resolve, reject) => {
    
         let headers = new Headers();
         headers.append('Authorization', this.authService.token);
    //need to change to workouts
         this.http.get('https://mfhserver.herokuapp.com/api/workouts', {headers: headers})
           .map(res => res.json())
           .subscribe(data => {
             resolve(data);
           }, (err) => {
             reject(err);
           });
       });
    
     }
}
