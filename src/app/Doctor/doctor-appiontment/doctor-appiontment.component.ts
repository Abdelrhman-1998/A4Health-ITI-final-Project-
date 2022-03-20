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
  edited!: any;
  adderror!: any;
  keys:any[]=[]
  errorss:any[]=[]
  deleted!: any;
  addsuccess!: any;

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
  addGroupAppiontment:FormGroup = new FormGroup({
    start_date:new FormControl(null , [Validators.required] ),
    end_date:new FormControl(null , ),
    start_time:new FormControl(null, [Validators.required]),
    patient_limit:new FormControl(null, [Validators.required]),
    examination_time:new FormControl(null, [Validators.required]),
    doctor_id:new FormControl(localStorage.getItem("id"), [Validators.required]),
  });
  ngOnInit(): void {
    this._Doctorservic.getDoctorAppiontmets().subscribe((response)=>{
      this.doctorAppiontmets = response;
      this.doctorAppiontmets.sort((a, b) => (a.date < b.date) ? 1 : (a.date === b.date) ? ((a.start_time < b.start_time) ? 1 : -1) : -1 )
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
    console.log(appiontment.errors);
    //this.doctorAppiontmets.push(appiontment);
    this._Doctorservic.Addappiontment(appiontment).subscribe((response)=>{
      //this.doctorAppiontmets = response;
      //console.log(response);
      this.ngOnInit();
    });

  }
  addGroupAppiontmets(appiontments:any)
  {
    this.adderror=null;
    this.addsuccess=null;
    //console.log(appiontments);
    //this.doctorAppiontmets.push(appiontment);
    this._Doctorservic.Addappiontment(appiontments).subscribe((response)=>{
      //this.doctorAppiontmets = response;
          console.log(response);
          if(response.errors)
          {
            this.adderror=response.errors;
            for (const property in response.errors) {
              //console.log(`${property}: ${response.errors[property]}`)
              this.keys.push(property);
              this.keys.push(response.errors[property]);
              //console.log(this.keys);
            }
          }
          else
          {
            this.addsuccess=response;
          }


 
     
      this.ngOnInit();
    });

  }
  getindexToDelete(appiontment:any)
  {
    this.index= appiontment.id;
    this.deleted=null;
    console.log(this.index);
  }
  deleteAppiontmets()
  {      
    this._Doctorservic.deleteAppiontment(this.index).subscribe((response)=>{
      if(response.response == 'deleted')
      {
        this.deleted = response.response;
      }
      console.log(response);
      this.ngOnInit();
    });
  }
  getIndexAppiontmets(appiontment:any)
  {
  // console.log(this.doctorAppiontmets.indexOf(appiontment));
  // this.index= this.doctorAppiontmets.indexOf(appiontment);
     this.index= appiontment.id;
     this.edited=null;
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
      if(response.response == 'updated')
      {
        this.edited = response.response;
      }
      this.ngOnInit();
    });
    /*console.log(appiontment);
    this.doctorAppiontmets.splice(this.index,1,appiontment);*/
  }
}
