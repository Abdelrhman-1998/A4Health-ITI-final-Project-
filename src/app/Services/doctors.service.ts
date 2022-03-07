import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Doctor } from "../../app/Models/doctor";
import { environment } from "../../environments/environment";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class DoctorsService {
  constructor(private httpClient: HttpClient) {}
  getAllDoctors(): Observable<Doctor[]> {
    return this.httpClient.get<Doctor[]>(`${environment.ApiUrl}/doctors`);
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
  addDoctor(newDoctor: Doctor): Observable<Doctor> {
    const headers = { "content-type": "application/json" };
    const body = JSON.stringify(newDoctor);
    return this.httpClient.post<Doctor>(`${environment.ApiUrl}/doctors`, body, {
      headers: headers,
    });
  }
  updateDoctor(doctorId: number, updateDoctor: Doctor): Observable<Doctor> {
    const body = JSON.stringify(updateDoctor);
    return this.httpClient.put<Doctor>(
      `${environment.ApiUrl}/doctors/${doctorId}`,
      body
    );
  }
  deleteDoctor(doctorId: number): Observable<Doctor> {
    return this.httpClient.delete<Doctor>(
      `${environment.ApiUrl}/doctors/${doctorId}`
    );
  }
}
