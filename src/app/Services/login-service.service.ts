import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from "@angular/common/http";
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../Models/user';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';




@Injectable({
  providedIn: 'root'
})
export class LoginService {

  header:any =new HttpHeaders().set("Authorization",localStorage.getItem('AuthorizationA')!);

  private isLoggedSub:BehaviorSubject<boolean>
  constructor(private httpClient: HttpClient , private router:Router) { 

    this.isLoggedSub=new BehaviorSubject<boolean>(false)
  }

  login(user:User):Observable<User>{
    // call  login API ,access token

    let token =''
    localStorage.setItem('AuthorizationA',token)
    this.isLoggedSub.next(true)
    return this.httpClient.post<User>(`${environment.ApiUrl}/dashboard/login`,user)
  }
  logout(){
    localStorage.removeItem('AuthorizationA');
    this.isLoggedSub.next(false)
    return this.httpClient.get(`${environment.ApiUrl}/logout`,{headers:this.header})
  }
  get isUserlogged():boolean{
    return (localStorage.getItem('AuthorizationA'))?true:false
  }
  getToken():Observable<string>{
    return this.httpClient.get<string>(`${environment.ApiUrl}/token`)

  }
  isUserLoggedSub():Observable<boolean>{
    return this.isLoggedSub.asObservable();
  }

  checkToken(){
    if(!localStorage.getItem('AuthorizationA')){
      this.router.navigate(['/admin/login'])
    }
  }

}
