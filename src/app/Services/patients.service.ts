import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Patient } from '../../app/Models/patient';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PatientsService {

  constructor(private httpClient: HttpClient) { }
  getAllPatients():Observable<Patient[]>{
    return this.httpClient.get<Patient[]>(`${environment.ApiUrl}/patients`)
  }
  getPatientByID(patient_id:number):Observable<Patient>{
    return this.httpClient.get<Patient>(`${environment.ApiUrl}/patients/${patient_id}`)
  }
  updatePatient(patient_id:number,updatePatient:Patient):Observable<Patient>{
    const body = JSON.stringify(updatePatient);
    return this.httpClient.put<Patient>(
      `${environment.ApiUrl}/doctors/${patient_id}`,
      body
    );
  }
  deletePatientByID(patient_id:number):Observable<Patient>{
    return this.httpClient.delete<Patient>(`${environment.ApiUrl}/patients/${patient_id}`)
  }
}
