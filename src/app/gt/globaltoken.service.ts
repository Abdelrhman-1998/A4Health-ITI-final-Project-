import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobaltokenService {

  itemValue = new BehaviorSubject(this.thetoken);
  idValue = new BehaviorSubject(this.theid);

  set thetoken(value:any) {
    this.itemValue.next(value); // this will make sure to tell every subscriber about the change.
    localStorage.setItem('Authorization',value);
  }
  set theid(value:any) {
    this.itemValue.next(value); // this will make sure to tell every subscriber about the change.
    localStorage.setItem('id',value);
  }
  get thetoken() {
    return localStorage.getItem('Authorizationken');
  }
  get theid() {
    return localStorage.getItem('id');
  }
}
