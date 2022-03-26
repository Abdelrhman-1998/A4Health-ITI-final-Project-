import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Patient } from '../../app/Models/patient';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PatientsService {
  header:any =new HttpHeaders().set("Authorization",localStorage.getItem('Authorization')!);

  constructor(private httpClient: HttpClient) { }
  getAllPatients():Observable<Patient[]>{
    let header =new HttpHeaders().set("Authorization",localStorage.getItem('AuthorizationA')!);
    return this.httpClient.get<Patient[]>(`${environment.ApiUrl}/dashboard/patients`,{headers:header})
  }
  // getPatientByID(patient_id:number):Observable<Patient>{
  //   return this.httpClient.get<Patient>(`${environment.ApiUrl}/patients/${patient_id}`)
  // }
  getPatientByID(patient_id:any){
    let url="https://a4-health.herokuapp.com/api/patients/"+patient_id;
    return this.httpClient.get(url,{'headers':this.header});

  }
  changePassword(patient_id:any,password:{}){
    let url = "https://a4-health.herokuapp.com/api/patients/"+patient_id+"/password";
    return this.httpClient.put(url,password,{'headers':this.header});
  }
  submitFeedBack(patient_id:any,feedback:{}){
    let header =new HttpHeaders().set("Authorization",localStorage.getItem('Authorization')!);
    let url="https://a4-health.herokuapp.com/api/patients/"+patient_id+"/feedback";
    return this.httpClient.post(url,feedback,{'headers':header});
  }
  // updatePatient(patient_id:number,updatePatient:Patient):Observable<Patient>{
  //   const body = JSON.stringify(updatePatient);
  //   return this.httpClient.put<Patient>(
  //     `${environment.ApiUrl}/doctors/${patient_id}`,updatePatient,{headers:this.header});
  // }
  updatePatient(patient_id:any,patient_data:any){
    let url="https://a4-health.herokuapp.com/api/patients/"+patient_id;
    console.log(url);
    return this.httpClient.put(url,patient_data,{'headers':this.header});
  }
  deletePatientByID(patient_id:number):Observable<Patient>{
    let header =new HttpHeaders().set("Authorization",localStorage.getItem('AuthorizationA')!);
    return this.httpClient.delete<Patient>(`${environment.ApiUrl}/dashboard/patients/${patient_id}`,{headers:header})
  }
}
