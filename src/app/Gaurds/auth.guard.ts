import { HttpErrorResponse, HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, of, throwError } from 'rxjs';
import { LoginService } from '../Services/login-service.service';
import{JwtHelperService} from '@auth0/angular-jwt'

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  public jwtHelper: JwtHelperService = new JwtHelperService();

  constructor( 
    private AuthUser:LoginService,
    private router:Router
    ){}

  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
   const Authorization =localStorage.getItem('Authorization');
  //  Authorization&& this.jwtHelper.isTokenExpired(Authorization) || 
  if(this.AuthUser.isUserlogged){
    console.log('true');
    return true
  } else{
      alert('You Must LogIn First !')


      this.router.navigate(['/login'])
      return false
    }
      
  }
  
}
