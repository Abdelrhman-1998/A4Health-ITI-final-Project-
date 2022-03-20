import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminNotificationService {
  header:any =new HttpHeaders().set("Authorization",localStorage.getItem('AuthorizationA')!);

  constructor(private httpClient: HttpClient) { }
  getNotifications(){
    return this.httpClient.get(`${environment.ApiUrl}/dashboard/notifications`,{'headers':this.header});

  }
}
