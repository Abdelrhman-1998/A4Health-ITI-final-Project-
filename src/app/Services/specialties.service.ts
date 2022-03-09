import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Specialty } from '../Models/specialty';

@Injectable({
  providedIn: 'root'
})
export class SpecialtiesService {

  constructor(private httpClient: HttpClient) { }
  getAllSpecialties(): Observable<Specialty[]>{
    return this.httpClient.get<Specialty[]>(`${environment.ApiUrl}/specialties`);
   }
   getSpecialtyByID(Id: number): Observable<Specialty>{
    return this.httpClient.get<Specialty>(`${environment.ApiUrl}/specialties/${Id}`);
   }
   deleteSpecialty(Id: number): Observable<Specialty> {
    return this.httpClient.delete<Specialty>(
      `${environment.ApiUrl}/specialties/${Id}`
    );
  }
  addSpecialty(newSpeicalty: Specialty): Observable<Specialty> {
    const headers = { "content-type": "application/json" };
    const body = JSON.stringify(newSpeicalty);
    return this.httpClient.post<Specialty>(`${environment.ApiUrl}/specialties`, body, {
      headers: headers,
    });
  }
  updateSpecialty(Id: number, updateDoctor: Specialty): Observable<Specialty> {
    // const body = JSON.stringify(updateDoctor);
    return this.httpClient.put<Specialty>(
      `${environment.ApiUrl}/specialties/${Id}`, updateDoctor
    );
  }
}
