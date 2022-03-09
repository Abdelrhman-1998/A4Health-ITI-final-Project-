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
  constructor(private specialtyServer:SpecialtiesService) { }
  
  ngOnInit(): void {
    this.getAllSpecialties()
  }
getAllSpecialties(){
  this.specialtyServer.getAllSpecialties().subscribe(
    (res)=>{
      this.specialties=res
    }
  )
}
delete(id:number){
  this.specialtyServer.deleteSpecialty(id).subscribe(() => 
  {this.status = 'Delete successful' 
  this.ngOnInit();
})
  }
}
