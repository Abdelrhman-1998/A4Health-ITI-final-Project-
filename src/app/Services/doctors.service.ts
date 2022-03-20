import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Doctor } from "../../app/Models/doctor";
import { environment } from "../../environments/environment";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class DoctorsService {
  header:any =new HttpHeaders().set("Authorization",localStorage.getItem('Authorization')!);
  constructor(private httpClient: HttpClient) {}
  getAllDoctors(): Observable<Doctor[]> {
    let header = new HttpHeaders().set("Authorization",localStorage.getItem('AuthorizationA')!);
    return this.httpClient.get<Doctor[]>(`${environment.ApiUrl}/dashboard/doctors`,{headers:header});
  }
  getDoctorWithID(doctorId: number): Observable<Doctor> {
    return this.httpClient.get<Doctor>(
      `${environment.ApiUrl}/doctors/${doctorId}`
    );
  }
  getDoctorWithRate(doctorRate: number): Observable<Doctor[]> {
    return this.httpClient.get<Doctor[]>(
      `${environment.ApiUrl}/doctors?rating=${doctorRate}`
    );
  }
  addDoctor(newDoctor: any): Observable<Doctor> {
    const headers = { "content-type": "application/json" };
    const body = JSON.stringify(newDoctor);
    let header = new HttpHeaders().set("Authorization",localStorage.getItem('AuthorizationA')!);

    return this.httpClient.post<Doctor>(`${environment.ApiUrl}/dashboard/doctors`, newDoctor, {
      headers: header});
  }
  updateDoctor(doctorId: number, updateDoctor: Doctor): Observable<Doctor> {
    const body = JSON.stringify(updateDoctor);
    return this.httpClient.put<Doctor>(
      `${environment.ApiUrl}/doctors/${doctorId}`,
      body
    );
  }
  deleteDoctor(doctorId: number): Observable<Doctor> {
    let header = new HttpHeaders().set("Authorization",localStorage.getItem('AuthorizationA')!);

    return this.httpClient.delete<Doctor>(
      `${environment.ApiUrl}/dashboard/doctors/${doctorId}`,{headers:header});
  }
 
}
