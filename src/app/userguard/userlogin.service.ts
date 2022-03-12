import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../Models/user';

@Injectable({
  providedIn: 'root'
})
export class UserloginService {

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
