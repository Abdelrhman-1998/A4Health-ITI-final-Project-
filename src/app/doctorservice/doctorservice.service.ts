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
    return this._HttpClient.get(`https://a4-health.herokuapp.com/api/doctors/${localStorage.getItem("id")}`,{headers:this.header});
  }
  getDoctorStatus():Observable<any>{
    return this._HttpClient.get(`https://a4-health.herokuapp.com/api/patients/${localStorage.getItem("id")}/reservations`,{headers:this.header});
  }
 updateDoctorEditProfile(edited:any):Observable<any>
  {
    return this._HttpClient.put(`https://a4-health.herokuapp.com/api/doctors/${localStorage.getItem("id")}`,edited,{headers:this.header});
  }
  updatePassword(password:any):Observable<any>
  {
    return this._HttpClient.put(`https://a4-health.herokuapp.com/api/doctors/${localStorage.getItem("id")}/password`,password,{headers:this.header});
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
  /*getDoctorPaitnetsAppiontmets():Observable<any>
  {
    return this._HttpClient.get("https://api.jsonbin.io/b/6228b888a703bb6749268ea5/1");
  }*/

  getDoctorPaitnetsAppiontmets():Observable<any>
  {

    return this._HttpClient.get(`https://a4-health.herokuapp.com/api/doctors/${localStorage.getItem("id")}/reservations`,{headers:this.header});
  }
  updateStatus(reservation_id:any , status:any):Observable<any>
  {
    return this._HttpClient.put(`https://a4-health.herokuapp.com/api/doctors/${localStorage.getItem("id")}/reservations/${reservation_id}`, status,{headers:this.header});
  }
  getNotifications():Observable<any>
  {
    return this._HttpClient.get(`https://a4-health.herokuapp.com/api/doctors/notifications`,{headers:this.header})
  }

  // Offers
  getOffers():Observable<any>
  {
    return this._HttpClient.get(`https://a4-health.herokuapp.com/api/doctors/${localStorage.getItem("id")}/offers`,{headers:this.header});
  }
  addOffer(offer:any):Observable<any>
  {
    return this._HttpClient.post(`https://a4-health.herokuapp.com/api/doctors/${localStorage.getItem("id")}/offers`,offer,{headers:this.header});
  }
  deleteOffer(offer_id:any):Observable<any>
  {
    return this._HttpClient.delete(`https://a4-health.herokuapp.com/api/doctors/${localStorage.getItem("id")}/offers/${offer_id}`,{headers:this.header});
  }
  updateOffer(offer_id:any , offer:any):Observable<any>
  {
    return this._HttpClient.put(`https://a4-health.herokuapp.com/api/doctors/${localStorage.getItem("id")}/offers/${offer_id}`,offer,{headers:this.header});
  }
  reportFeedBack(feedback_id:any):Observable<any>
  {
    return this._HttpClient.get(`https://a4-health.herokuapp.com/api/doctors/${localStorage.getItem("id")}/feedback/${feedback_id}/ReportAbuse`,{headers:this.header});
  }
 
}

