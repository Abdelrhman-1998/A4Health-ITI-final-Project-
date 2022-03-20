import { Component, OnInit } from '@angular/core';
import { Specialty } from 'src/app/Models/specialty';
import { SpecialtiesService } from 'src/app/Services/specialties.service';

@Component({
  selector: 'app-specialties',
  templateUrl: './specialties.component.html',
  styleUrls: ['./specialties.component.css']
})
export class SpecialtiesComponent implements OnInit {
  specialties:Specialty[]=[]
  status=''
  p: number = 1;
  count: number = 5;
  message!:string;
  specialtyId:any;
  constructor(private specialtyServer:SpecialtiesService) { }
  
  ngOnInit(): void {
    this.getAllSpecialties()
  }
  getSpecialityId(x:any){
      this.specialtyId=x;
  }
getAllSpecialties(){
  this.specialtyServer.getAllSpecialties().subscribe(
    (res)=>{
      this.specialties=res
      console.log( this.specialties);
      
    }
  )
}
delete(id:number){
  console.log(id);
  this.specialtyServer.deleteSpecialty(id).subscribe(() => 
  {this.status = 'Delete successful' 
  this.ngOnInit();
},() => this.message='Delete successful',
   console.error)
  }
}
