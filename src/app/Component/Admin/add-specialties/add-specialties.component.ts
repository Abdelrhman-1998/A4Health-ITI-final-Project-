import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Specialty } from 'src/app/Models/specialty';
import{NgForm,FormControl,FormGroup,Validators} from '@angular/forms'
import { SpecialtiesService } from 'src/app/Services/specialties.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-specialties',
  templateUrl: './add-specialties.component.html',
  styleUrls: ['./add-specialties.component.css']
})
export class AddSpecialtiesComponent implements OnInit {
  specialty!:any
  newSpecialty!:Specialty
  specialtyItem!: Specialty
  editMood = false;
 

  id = this.activatedRoute.snapshot.params['id'];
  title!:any
  updateSpecialty!:Specialty
  constructor(
    private specialtiesService:SpecialtiesService,    
    private activatedRoute: ActivatedRoute,


    ) {       this.editMood = true;
    }
  

  

  ngOnInit(): void {
    this.editMood = false;
    console.log(this.activatedRoute.snapshot.url );
    
    // console.log(this.activatedRoute.snapshot.url);
    if(this.activatedRoute.snapshot.url[2].path=='edit'){
      this.editMood = true;
    }
    if(this.editMood){
      this.getdoctorId()
    }

  }
  sendDataOfspecialty(data:NgForm){
    this.specialty=data
    
    this.specialtiesService.addSpecialty(this.specialty).subscribe(
      (spe)=>{
        this.newSpecialty=spe
      }
    )    
  }
  updateDataOfspecialty(data:NgForm){
  console.log(this.title=data);
  
    

    this.specialtiesService.updateSpecialty(this.id,this.title).subscribe(
      (res)=>{
        
      }
      
    )
     console.log(this.updateSpecialty);
  } 
 
  getdoctorId(){
  this.specialtiesService.getSpecialtyByID(this.id).subscribe(
    (spe)=>{
      this.specialtyItem=spe
    }
  );
    console.log(this.specialtyItem);
    
  }
}
