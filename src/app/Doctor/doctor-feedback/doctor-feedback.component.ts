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
  start:number []=[];
  ngOnInit(): void {
    this._Doctorservic.getDoctorFeedback().subscribe((response)=>{
      this.feedback = response;
      console.log(response.length)
      this.feedback.forEach(e => {
       e.rate=Number(e.rate)
     });
      console.log(response);
      //this.start = Array(response).fill(4);
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
  numSequence(n: number){
    return new Array(n);
  }
  counter(i: number) {
    return new Array(i);
}
}
