import { HttpErrorResponse, HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, of, throwError } from 'rxjs';
import { LoginService } from '../Services/login-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor( 
    private AuthUser:LoginService,
    private router:Router
    ){}
    private handleAuthError(err: HttpErrorResponse): Observable<any> {
      //handle your auth error or rethrow
      if (err.status === 401 || err.status === 403) {
          //navigate /delete cookies or whatever
          this.router.navigateByUrl(`admin/login`);
          // if you've caught / handled the error, you don't want to rethrow it unless you also want downstream consumers to have to handle it as well.
          return of(err.message); // or EMPTY may be appropriate here
      }
      return throwError(err);
  }

  // intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
  // // Clone the request to add the new header.
  //     const authReq = req.clone({headers: req.headers.set(Cookie.tokenKey, Cookie.getToken())});
  //     // catch the error, make specific functions for catching specific errors and you can chain through them with more catch operators
  //     return next.handle(authReq).pipe(catchError(x=> this.handleAuthError(x))); //here use an arrow function, otherwise you may get "Cannot read property 'navigate' of undefined" on angular 4.4.2/net core 2/webpack 2.70
  // }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
   if(this.AuthUser.isUserlogged){
     return true;
    }else{
      alert('You Must LogIn First !')
      this.router.navigate(['/admin/login'])
      return false
    }
      
  }
  
}
