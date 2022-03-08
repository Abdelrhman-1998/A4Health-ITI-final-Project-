import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DoctorserviceService {

  constructor(private _HttpClient:HttpClient) { }
  getDoctorProfile():Observable<any>
  {
    return this._HttpClient.get("https://api.jsonbin.io/b/6227430c7caf5d678362a438/1");
  }
  getDoctorFeedback():Observable<any>
  {
    return this._HttpClient.get("https://api.jsonbin.io/b/622748cb7caf5d678362a615");
  }
  getDoctorEditProfile():Observable<any>
  {
    return this._HttpClient.get("https://api.jsonbin.io/b/62276ed07caf5d678362b5ec/2");
  }
 
}

