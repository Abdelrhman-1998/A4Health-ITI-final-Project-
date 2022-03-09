import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Doctor } from 'src/app/Models/doctor';
import { DoctorsService } from 'src/app/Services/doctors.service';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.css']
})

export class DoctorsComponent implements OnInit {
  status:string=''
doctor:Doctor[]=[];
p: number = 1;
count: number = 5;

  constructor(
    private doctorService:DoctorsService,
    private router:Router
    ) { }

  ngOnInit(): void {
    this.getAllDoctors()
  }
 getAllDoctors(){
   this.doctorService.getAllDoctors().subscribe(
     (doc)=>{
       this.doctor=doc
     }
   )
 }
 delete(id:number){
   this.doctorService.deleteDoctor(id).subscribe(() => this.status = 'Delete successful')
   window.location.reload();
   }
}
