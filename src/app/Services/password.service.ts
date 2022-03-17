import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Patient } from '../../app/Models/patient';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PasswordService {
  header:any =new HttpHeaders().set("Authorization",localStorage.getItem('AuthorizationA')!);

  constructor(private httpClient: HttpClient) { }

  changePassword(updatepassword:any):Observable<Patient>{
      // const body = JSON.stringify(updatepassword);
      return this.httpClient.put<any>(
        `${environment.ApiUrl}/dashboard/updatePassword`,updatepassword,{headers:this.header});
    }

  }

