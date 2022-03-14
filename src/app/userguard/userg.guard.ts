import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserloginService } from './userlogin.service';

@Injectable({
  providedIn: 'root'
})
export class UsergGuard implements CanActivate {
  constructor( 
    private AuthUser:UserloginService,
    private router:Router
    ){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.AuthUser.isUserlogged){
        return true;
       }else{
         // alert('You Must LogIn First !')
         this.router.navigate(['/signin'])
         return false
       }
  }
  
}
