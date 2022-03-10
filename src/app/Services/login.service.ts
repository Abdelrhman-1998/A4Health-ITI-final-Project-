import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { User } from '../Models/user';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient) { }

  login(user:User):Observable<User>{
    // call  login API ,access token
    let token ="test"
    localStorage.setItem('token',token)
    return this.httpClient.post<User>(`${environment.ApiUrl}/admin`,user)
  }
  logout(){
    localStorage.removeItem('token');
  }
  get isUserlogged():boolean{
    return (localStorage.getItem('token'))?true:false
  }
}
