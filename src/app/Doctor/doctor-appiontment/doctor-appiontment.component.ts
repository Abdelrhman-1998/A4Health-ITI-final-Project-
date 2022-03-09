import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DoctorserviceService } from 'src/app/doctorservice/doctorservice.service';

@Component({
  selector: 'app-doctor-appiontment',
  templateUrl: './doctor-appiontment.component.html',
  styleUrls: ['./doctor-appiontment.component.css']
})
export class DoctorAppiontmentComponent implements OnInit {

  doctorAppiontmets:any[]=[]
  index!: number;
  constructor(private _Doctorservic:DoctorserviceService) { }
  addAppiontment:FormGroup = new FormGroup({
    date:new FormControl(null , [Validators.required] ),
    time:new FormControl(null, [Validators.required]),
    patientLimit:new FormControl(null, [Validators.required]),
    examinationTime:new FormControl(null, [Validators.required]),
  }); 
  editAppiontment:FormGroup = new FormGroup({
    date:new FormControl(null , [Validators.required] ),
    time:new FormControl(null, [Validators.required]),
  }); 
  ngOnInit(): void {
    this._Doctorservic.getDoctorAppiontmets().subscribe((response)=>{
      this.doctorAppiontmets = response;
      console.log(this.doctorAppiontmets);
    });
  }
  /*submitDate(form:any)
  {
    console.log(form);

    /*if(form.fName && form.lName && form.Gender && form.Phones && form.City)
    {
      console.log(form);
    }
    else
    {
      console.log(form.Phones);
    }
  }*/
  addAppiontmets(appiontment:any)
  {
    this.doctorAppiontmets.push(appiontment);
  }
  deleteAppiontmets(appiontment:any)
  {
    this.doctorAppiontmets.splice(this.doctorAppiontmets.indexOf(appiontment),1);
  }
  getIndexAppiontmets(appiontment:any)
  {
   console.log(this.doctorAppiontmets.indexOf(appiontment));
   this.index= this.doctorAppiontmets.indexOf(appiontment);
   //console.log( this.index);
  }
  editAppiontmets(appiontment:any)
  {
    console.log(appiontment ,this.index );
    this.doctorAppiontmets.splice(this.index,1,appiontment);

  }
}
