import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobaltokenService {

  reservationID:any;
  // from make appointment
  doctor_fullname:any;

  show_username!:boolean;

  username:any;
  itemValue = new BehaviorSubject(this.thetoken);
  idValue = new BehaviorSubject(this.theid);
  usernameValue=  new BehaviorSubject(this.theUsername);

  setReservation(value:any){
    this.reservationID=value;
  }

  getReservation(){
    return this.reservationID;
  }

  setDoctorFullName(value:any){
      this.doctor_fullname=value;
  }

  getDoctorFullName(){
    return this.doctor_fullname;
  }



  set thetoken(value:any) {
    this.itemValue.next(value); // this will make sure to tell every subscriber about the change.
    localStorage.setItem('Authorization',value);
  }
  set theid(value:any) {
    this.idValue.next(value); // this will make sure to tell every subscriber about the change.
    localStorage.setItem('id',value);
  }

  set theUsername(value:any){
        this.usernameValue.next(value);
        localStorage.setItem('username',value);
  }

  get thetoken() {
    return localStorage.getItem('Authorization');
  }
  get theid() {
    return localStorage.getItem('id');
  }
  get theUsername(){
    return   localStorage.getItem('username');
  }
}
