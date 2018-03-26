import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Auth } from '../auth/auth';
import 'rxjs/add/operator/map';
import { url }  from '../config';

@Injectable()
export class Offers {
  public URL : any ;
  
  constructor(public http: Http, public authService: Auth) {
    this.URL = url.toString();
  }
 
  getOffers(email_id){
 
    return new Promise((resolve, reject) => {
 
      let headers = new Headers();
      headers.append('Authorization', this.authService.token);
 
      this.http.get( this.URL +'api/offers/' + email_id, {headers: headers})
        .map(res => res.json())
        .subscribe(data => {
          console.log("GETTING OFFERS FROM EXPRESS")
          resolve(data);
        }, (err) => {
          console.log("GETTING OFFER ERROR FROM EXPRESS")
          
          reject(err);
        });
    });
 
  }
 
  createOffer(offer){
 
    return new Promise((resolve, reject) => {
 
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      headers.append('Authorization', this.authService.token);
    
      this.http.post( this.URL +'api/offers', JSON.stringify(offer), {headers: headers})
        .map(res => res.json())
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
 
    });
 
  }
 
  deleteOffer(id){
 
    return new Promise((resolve, reject) => {
 
        let headers = new Headers();
        headers.append('Authorization', this.authService.token);
 
        this.http.delete( this.URL +'api/offers/' + id, {headers: headers}).subscribe((res) => {
            resolve(res);
        }, (err) => {
            reject(err);
        });   
 
    });
 
  }
 
}