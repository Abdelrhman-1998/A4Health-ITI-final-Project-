import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DoctorserviceService {

  header:any =new HttpHeaders().set("Authorization",localStorage.getItem('Authorization')!);
  constructor(private _HttpClient:HttpClient) { }
  getDoctorProfile():Observable<any>
  {
    return this._HttpClient.get(`https://a4-health.herokuapp.com/api/doctors/${localStorage.getItem("id")}`,{headers:this.header});
  }
  getDoctorFeedback():Observable<any>
  {
    return this._HttpClient.get(`https://a4-health.herokuapp.com/api/doctors/${localStorage.getItem("id")}/feedback`,{headers:this.header});
  }
  getDoctorEditProfile():Observable<any>
  {
    return this._HttpClient.get("https://api.jsonbin.io/b/62276ed07caf5d678362b5ec/2");
  }
  getDoctorAppiontmets():Observable<any>
  {
    return this._HttpClient.get(`https://a4-health.herokuapp.com/api/doctors/${localStorage.getItem("id")}/appointments`,{headers:this.header});
  }
  Addappiontment(newAppiontment:any):Observable<any>
  {
    return this._HttpClient.post(`https://a4-health.herokuapp.com/api/doctors/${localStorage.getItem("id")}/appointments`,newAppiontment,{headers:this.header});
  }
  deleteAppiontment(appiontment_id:any):Observable<any>
  {
    return this._HttpClient.delete(`https://a4-health.herokuapp.com/api/doctors/${localStorage.getItem("id")}/appointments/${appiontment_id}`,{headers:this.header});
  }
  updateAppiontment(appiontment_id:any , appiontment:any):Observable<any>
  {
    return this._HttpClient.put(`https://a4-health.herokuapp.com/api/doctors/${localStorage.getItem("id")}/appointments/${appiontment_id}`, appiontment,{headers:this.header});
  }
  getDoctorPaitnetsAppiontmets():Observable<any>
  {
    return this._HttpClient.get("https://api.jsonbin.io/b/6228b888a703bb6749268ea5/1");
  }
  getNotifications():Observable<any>
  {
    return this._HttpClient.get("https://api.jsonbin.io/b/622d10fd7caf5d67836752d7/1")
  }
 
}

