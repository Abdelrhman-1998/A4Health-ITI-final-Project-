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
  editIndex!: number;

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
  }
}
