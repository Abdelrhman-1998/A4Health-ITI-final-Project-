import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DoctorserviceService } from 'src/app/doctorservice/doctorservice.service';

@Component({
  selector: 'app-doctor-reservations',
  templateUrl: './doctor-reservations.component.html',
  styleUrls: ['./doctor-reservations.component.css']
})
export class DoctorReservationsComponent implements OnInit {
  doctorPaitnetsAppiontmets:any[]=[]
  filter:any[]=[]
  isFilter:boolean=false;

  editIndex!: number;
  _Status: string="pending"


  constructor(private _Doctorservic:DoctorserviceService) { }
  patientStatus:FormGroup = new FormGroup({
    status:new FormControl(null , [Validators.required] ),
  }); 
  ngOnInit(): void {
    this._Doctorservic.getDoctorPaitnetsAppiontmets().subscribe((response)=>{
      this.doctorPaitnetsAppiontmets = response;
      console.log(this.doctorPaitnetsAppiontmets);
    });
  }
  getIndexChanged(dpa:any)
  {
   // console.log(this.doctorPaitnetsAppiontmets.indexOf(dpa));
    this.editIndex = this.doctorPaitnetsAppiontmets.indexOf(dpa)
    //console.log(this.editIndex);

  }
  changeStatus(patientStatus:any)
  {
    console.log(patientStatus);

   console.log(this.doctorPaitnetsAppiontmets[this.editIndex])
   this.doctorPaitnetsAppiontmets[this.editIndex].status=patientStatus.status;
   //console.log(this.doctorPaitnetsAppiontmets)

  }
  filterS(status:any)
  {
    this.isFilter=true;
    console.log(status);
    let filterArr:any = []
    for(let i = 0 ; i<this.doctorPaitnetsAppiontmets.length ; i++)
    {
      if(this.doctorPaitnetsAppiontmets[i].status==status)
      {
        filterArr.push(this.doctorPaitnetsAppiontmets[i]);
      }
    }
    console.log(filterArr);
    this.filter = filterArr;
  }
}
