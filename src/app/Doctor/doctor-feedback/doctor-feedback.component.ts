import { Component, OnInit } from '@angular/core';
import { DoctorserviceService } from 'src/app/doctorservice/doctorservice.service';

@Component({
  selector: 'app-doctor-feedback',
  templateUrl: './doctor-feedback.component.html',
  styleUrls: ['./doctor-feedback.component.css']
})
export class DoctorFeedbackComponent implements OnInit {

  constructor(private _Doctorservic:DoctorserviceService) { }
  feedback:any[]=[];
  index!: number;
  success!: any;
  ngOnInit(): void {
    this._Doctorservic.getDoctorFeedback().subscribe((response)=>{
      this.feedback = response;
      console.log(response);
    });
  }
  getindexToReport(feedback:any)
  {
    this.index= feedback.id;
    this.success = null;
    console.log(this.index);
  }
  sendReport()
  {
    this._Doctorservic.reportFeedBack( this.index).subscribe((response)=>{
     // this.feedback = response;
     this.success = response.response
    });
  }
}
