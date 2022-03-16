import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Specialty } from '../Models/specialty';

@Injectable({
  providedIn: 'root'
})
export class SpecialtiesService {
  header:any =new HttpHeaders().set("Authorization",localStorage.getItem('AuthorizationA')!);
  text:string=''
  constructor(private httpClient: HttpClient) { }
  getAllSpecialties(): Observable<Specialty[]>{
    return this.httpClient.get<Specialty[]>(`${environment.ApiUrl}/dashboard/specializations
    `,{headers:this.header})
   }
   getSpecialtyByID(Id: number): Observable<Specialty>{
    return this.httpClient.get<Specialty>(`${environment.ApiUrl}/dashboard/specializations/${Id}`,{headers:this.header});
   }
   deleteSpecialty(Id: number): Observable<Specialty> {
    return this.httpClient.delete<Specialty>(
      `${environment.ApiUrl}/dashboard/specializations/${Id}`,{headers:this.header});
  }
  addSpecialty(newSpeicalty: Specialty): Observable<Specialty> {
    // const headers = { "content-type": "application/json" };
    const body = JSON.stringify(newSpeicalty);
    return this.httpClient.post<Specialty>(`${environment.ApiUrl}/dashboard/specializations`, newSpeicalty, {headers:this.header});
  }
  updateSpecialty(Id: number, updateDoctor: Specialty): Observable<Specialty> {
    // const body = JSON.stringify(updateDoctor);
    return this.httpClient.put<Specialty>(
      `${environment.ApiUrl}/dashboard/specializations/${Id}`, updateDoctor,{headers:this.header}
    );
  }
}
