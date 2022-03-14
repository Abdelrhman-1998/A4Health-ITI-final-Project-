import { Component, OnInit } from '@angular/core';
import { DoctorserviceService } from 'src/app/doctorservice/doctorservice.service';

@Component({
  selector: 'app-doctor-dashboard',
  templateUrl: './doctor-dashboard.component.html',
  styleUrls: ['./doctor-dashboard.component.css']
})
export class DoctorDashboardComponent implements OnInit {

  constructor(private _Doctorservic:DoctorserviceService) { }
  notification:any[]=[]
  type:any

  ngOnInit(): void {
    this._Doctorservic.getNotifications().subscribe((response)=>{
      this.notification = response.notifications;
      this.type = response.type;
      console.log(this.notification);
    });
  }

}