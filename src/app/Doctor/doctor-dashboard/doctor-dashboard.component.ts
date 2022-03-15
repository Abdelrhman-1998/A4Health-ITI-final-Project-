import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DoctorserviceService } from 'src/app/doctorservice/doctorservice.service';
import { UserloginService } from 'src/app/userguard/userlogin.service';

@Component({
  selector: 'app-doctor-dashboard',
  templateUrl: './doctor-dashboard.component.html',
  styleUrls: ['./doctor-dashboard.component.css']
})
export class DoctorDashboardComponent implements OnInit {

  constructor(private _Doctorservic:DoctorserviceService , private _logoutservice:UserloginService ,  private router:Router
) { }
  notification:any[]=[]
  type:any

  ngOnInit(): void {
    this._Doctorservic.getNotifications().subscribe((response)=>{
      this.notification = response;
      console.log(this.notification);
    });
  }
  logout()
  {
    this._logoutservice.logout()
    this.router.navigate(['signin'])
  }

}