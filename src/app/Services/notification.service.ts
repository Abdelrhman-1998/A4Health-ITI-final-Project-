import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private httpClient: HttpClient) { }
  getUserNotification():Observable<any[]>{
return this.httpClient.get<any[]>(`${environment.ApiUrl}/notification`)
  }
}
