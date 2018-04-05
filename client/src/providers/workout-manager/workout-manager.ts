import { Injectable } from '@angular/core';
import { Auth } from '../auth/auth';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { url } from '../config';

/*
  Generated class for the WorkoutManagerProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class WorkoutManagerProvider {
  public URL : any ;
  

  constructor(public http: Http, public authService: Auth ) {
    console.log('Hello WorkoutManagerProvider Provider');
    this.URL = url.toString();
  }

  getExercises(){
    
       return new Promise((resolve, reject) => {
    
         let headers = new Headers();
         headers.append('Authorization', this.authService.token);
    //need to change to exercises
         this.http.get( this.URL +'api/exercises')
           .map(res => res.json())
           .subscribe(data => {
             resolve(data);
           }, (err) => {
             reject(err);
           });
       });
    
     }
     
  getWorkout(email_id){
      
         return new Promise((resolve, reject) => {
      
           let headers = new Headers();
           headers.append('Authorization', this.authService.token);
          //  headers.append('email', email_id);
      
      //need to change to workouts
           this.http.get( this.URL +'api/workouts/' + email_id, {headers: headers } )
             .map(res => res.json())
             .subscribe(data => {
               resolve(data.workout);
             }, (err) => {
               console.log("ERROR !!@!@,   " , err)
               reject(err);
             });
         });
      
       }

       getWorkoutExercises(workout_name){
        console.log("!!!!!!!",workout_name);
           return new Promise((resolve, reject) => {
        
             let headers = new Headers();
             headers.append('Authorization', this.authService.token);
             
        //need to change to workouts
             this.http.get( this.URL +'api/workouts/exercises/' + workout_name, {headers: headers} )
             .map(res => res.json())
             .subscribe(data => {
              console.log("\n\n data  : " + data + "\n\n");
              
        
              console.log("\n\n data exercises : " + data.exercises + "\n\n");
        
              
               resolve(data.exercises);
             }, (err) => {
               console.log("ERROR !!@!@,   " ,err)
               reject(err);
             });
         });
        
         }

         getExercisesByGroup(muscle){
             return new Promise((resolve, reject) => {
          
               
               this.http.get( this.URL +'api/exercises/groups/' + muscle )
               .map(res => res.json())
               .subscribe(data => {
          
                console.log("\n\n data exercise : " + data.exercise + "\n\n");
                console.log("\n\n data exercises : " + data.exercises + "\n\n");
          
                
                 resolve(data.exercise);
               }, (err) => {
                 console.log("ERROR !!@!@,   " ,err)
                 reject(err);
               });
           });
          
           }

           createWorkout(new_Workout){
 
            return new Promise((resolve, reject) => {
         
              let headers = new Headers();
              headers.append('Content-Type', 'application/json');
              headers.append('Authorization', this.authService.token);
            
              this.http.post( this.URL +'api/workouts', JSON.stringify(new_Workout), {headers: headers})
                .map(res => res.json())
                .subscribe(res => {
                  resolve(res);
                }, (err) => {
                  reject(err);
                });
         
            });
         
          }

          getCustomWorkouts(details){
            // let array = details.split(",");
            console.log("\n\n coach: " + details + "\n\n");
            console.log("\n\n client : "  + "\n\n");
            return new Promise((resolve, reject) => {
           
              let headers = new Headers();
              headers.append('Authorization', this.authService.token);

              this.http.get(this.URL +'api/workouts/customized'+ details,  {headers: headers})
              .map(res => res.json())
              .subscribe(data => {
         
               console.log("\n\n data exercise : " + data.exercise + "\n\n");
               console.log("\n\n data exercises : " + data.exercises + "\n\n");
         
               
                resolve(data.exercise);
              }, (err) => {
                console.log("ERROR !!@!@,   " ,err)
                reject(err);
              });
          });
         
          }

}
