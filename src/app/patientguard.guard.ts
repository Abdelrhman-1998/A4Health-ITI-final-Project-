import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PatientguardGuard implements CanActivate {
  constructor( 
    private router:Router
    ){}
  canActivate(
    
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(localStorage.getItem('type')=="patient"){
        return true;
       }else{
         // alert('You Must LogIn First !')
         this.router.navigate(['/signin'])
         return false
       }
  }
  
}
