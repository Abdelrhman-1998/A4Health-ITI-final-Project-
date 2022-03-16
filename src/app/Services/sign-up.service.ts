import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../Models/user';

@Injectable({
  providedIn: 'root'
})
export class SignUpService {

  constructor(private httpClient: HttpClient) { }
  SignUp(user:User):Observable<User>{
    // call  login API ,access token
    let token =''
    localStorage.setItem('Authorization',token)
    return this.httpClient.post<User>(`${environment.ApiUrl}/verify`,user)
  }
  delete(id:any):Observable<any>{
    return this.httpClient.delete<any>(`${environment.ApiUrl}/deleteUnverifiedUser/${id}`)

  }
}
