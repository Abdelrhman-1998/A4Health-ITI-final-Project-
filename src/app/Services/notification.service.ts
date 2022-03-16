import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  header:any =new HttpHeaders().set("Authorization",localStorage.getItem('Authorization')!);

  constructor(private httpClient: HttpClient) { }
//   getUserNotification():Observable<any[]>{
// return this.httpClient.get<any[]>(`${environment.ApiUrl}/patients/notifications`,{'headers':this.header})
//   }

getUserNotifications(){
  return this.httpClient.get("https://a4-health.herokuapp.com/api/patients/notifications",{'headers':this.header});
}
}
