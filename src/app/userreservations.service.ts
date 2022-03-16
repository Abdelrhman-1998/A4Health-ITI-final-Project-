import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class UserreservationsService {
  header=new HttpHeaders().set("Authorization",localStorage.getItem('Authorization')!);

  constructor(private _HttpClient:HttpClient) { 
  }
  // getReservations():Observable<any>
  // {
  //   return this._HttpClient.get("https://api.jsonbin.io/b/62235000a703bb67492299f9/2");
  // }

  getReservations(patient_id:any){
    let url="https://a4-health.herokuapp.com/api/patients/"+patient_id+"/reservations";
     return this._HttpClient.get(url,{'headers':this.header});
  }
  deleteReservation(patient_id:any,reservation_id:any){
    let url="https://a4-health.herokuapp.com/api/patients/"+patient_id+"/reservations/"+reservation_id;
    return this._HttpClient.delete(url,{'headers':this.header});
  }
  /*deleteReservations(userData:any):Observable<any>
  {
    return this._HttpClient.delete("https://api.jsonbin.io/b/62235000a703bb67492299f9",userData);
  }*/


  // getUserData():Observable<any>
  // {
  //   return this._HttpClient.get("https://api.jsonbin.io/b/6225d251a703bb67492404fe/1");
  // }
  
}
