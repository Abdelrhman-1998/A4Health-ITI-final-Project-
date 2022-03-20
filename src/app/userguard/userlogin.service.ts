import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { GlobaltokenService } from '../gt/globaltoken.service';
import { User } from '../Models/user';

@Injectable({
  providedIn: 'root'
})
export class UserloginService {

  private isLoggedSub:BehaviorSubject<boolean>
  constructor(private httpClient: HttpClient , private gtoken : GlobaltokenService) { 
    this.isLoggedSub=new BehaviorSubject<boolean>(false)
  }
  _login(userData: any):Observable<any>
  {
    let token =''
    let id_token =''
    //localStorage.setItem('Authorization',token)
     this.gtoken.thetoken =token ;

    //localStorage.setItem('id',id_token)
    this.gtoken.theid =id_token ;

    this.isLoggedSub.next(true)
    return this.httpClient.post("https://a4-health.herokuapp.com/api/login" , userData);
  }

  /*login(user:User):Observable<User>{
    // call  login API ,access token
    
    return this.httpClient.post<User>(`${environment.ApiUrl}/admin`,user)
  }*/
  logout(){

    /*localStorage.removeItem('Authorization');
    localStorage.removeItem('id');*/
    this.gtoken.thetoken ='' ;
    this.gtoken.theid ='' ;
    // localStorage.removeItem('type');

    this.gtoken.theUserType='';
    this.isLoggedSub.next(false)
  }
  get isUserlogged():boolean{
    return (localStorage.getItem('Authorization'))?true:false
  }
  getToken():Observable<string>{
    return this.httpClient.get<string>(`${environment.ApiUrl}/token`)
  }
  isUserLoggedSub():Observable<boolean>{
    return this.isLoggedSub.asObservable();
  }
}
