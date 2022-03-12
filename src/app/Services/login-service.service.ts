import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../Models/user';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private isLoggedSub:BehaviorSubject<boolean>
  constructor(private httpClient: HttpClient) { 
    this.isLoggedSub=new BehaviorSubject<boolean>(false)
  }

  login(user:User):Observable<User>{
    // call  login API ,access token
    let token ="test"
    localStorage.setItem('token',token)
    this.isLoggedSub.next(true)
    return this.httpClient.post<User>(`${environment.ApiUrl}/admin`,user)
  }
  logout(){

    localStorage.removeItem('token');
    this.isLoggedSub.next(false)
  }
  get isUserlogged():boolean{
    return (localStorage.getItem('token'))?true:false
  }
  isUserLoggedSub():Observable<boolean>{
    return this.isLoggedSub.asObservable();
  }
}
