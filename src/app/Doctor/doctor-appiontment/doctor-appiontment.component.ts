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
    start_time:new FormControl(null, [Validators.required]),
    patient_limit:new FormControl(null, [Validators.required]),
    examination_time:new FormControl(null, [Validators.required]),
    doctor_id:new FormControl(localStorage.getItem("id"), [Validators.required]),
  }); 
  editAppiontment:FormGroup = new FormGroup({
    date:new FormControl(null , [Validators.required] ),
    start_time:new FormControl(null, [Validators.required]),
    patient_limit:new FormControl(null, [Validators.required]),
    examination_time:new FormControl(null, [Validators.required]),
    doctor_id:new FormControl(localStorage.getItem("id")),
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
    console.log(appiontment);
    //this.doctorAppiontmets.push(appiontment);
    this._Doctorservic.Addappiontment(appiontment).subscribe((response)=>{
      //this.doctorAppiontmets = response;
      //console.log(response);
      window.location.reload();
    });

  }
  deleteAppiontmets(appiontment:any)
  {
          //console.log(appiontment.id);

    //deleteAppiontment
    //this.doctorAppiontmets.splice(this.doctorAppiontmets.indexOf(appiontment),1);
    this._Doctorservic.deleteAppiontment(appiontment.id).subscribe((response)=>{
      //this.doctorAppiontmets = response;
      //console.log(response);
      window.location.reload();
    });
  }
  getIndexAppiontmets(appiontment:any)
  {
  // console.log(this.doctorAppiontmets.indexOf(appiontment));
  // this.index= this.doctorAppiontmets.indexOf(appiontment);
     this.index= appiontment.id;
     console.log(this.index);

   this.editAppiontment = new FormGroup ({
    date:new FormControl( appiontment.date ),
  start_time:new FormControl(appiontment.start_time),
  patient_limit:new FormControl(appiontment.patient_limit),
  examination_time:new FormControl(appiontment.examination_time, [Validators.required]),
  })
   //console.log( this.index);
  }
  editAppiontmets(appiontment:any)
  {
        console.log(this.index);
        console.log(appiontment);
        //console.log(typeof appiontment.start_time)
        appiontment.start_time = appiontment.start_time.slice(0 , appiontment.start_time.length-3)
        console.log(appiontment);

    this._Doctorservic.updateAppiontment(this.index,appiontment).subscribe((response)=>{
      //this.doctorAppiontmets = response;
      console.log(response);
       window.location.reload();
    });
    /*console.log(appiontment);
    this.doctorAppiontmets.splice(this.index,1,appiontment);*/
  }
}
