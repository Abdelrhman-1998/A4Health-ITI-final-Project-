import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class UserreservationsService {

  constructor(private _HttpClient:HttpClient) { 
  }
  getReservations():Observable<any>
  {
    return this._HttpClient.get("https://api.jsonbin.io/b/62235000a703bb67492299f9/2");
  }
  /*deleteReservations(userData:any):Observable<any>
  {
    return this._HttpClient.delete("https://api.jsonbin.io/b/62235000a703bb67492299f9",userData);
  }*/
  getUserData():Observable<any>
  {
    return this._HttpClient.get("https://api.jsonbin.io/b/6225d251a703bb67492404fe/1");
  }
  
}
