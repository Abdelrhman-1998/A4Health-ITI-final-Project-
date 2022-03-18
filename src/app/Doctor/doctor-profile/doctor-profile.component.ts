import { Component, OnInit } from '@angular/core';
import { DoctorserviceService } from 'src/app/doctorservice/doctorservice.service';

@Component({
  selector: 'app-doctor-profile',
  templateUrl: './doctor-profile.component.html',
  styleUrls: ['./doctor-profile.component.css']
})
export class DoctorProfileComponent implements OnInit {
  doctorData:any;
  constructor(private _Doctorservic:DoctorserviceService) { }

  ngOnInit(): void {

    this._Doctorservic.getDoctorProfile().subscribe((response)=>{
      this.doctorData = response;
      console.log(response);
      console.log(this.doctorData);
    });
  }

}
