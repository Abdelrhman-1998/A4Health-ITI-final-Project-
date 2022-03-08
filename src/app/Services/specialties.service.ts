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
  getAllReviews(): Observable<Specialty[]>{
    return this.httpClient.get<Specialty[]>(`${environment.ApiUrl}/specialties`);
   }
}
