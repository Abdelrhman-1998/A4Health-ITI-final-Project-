import { Component, OnInit } from '@angular/core';
import{NgForm,FormControl,FormGroup,Validators} from '@angular/forms'
import { Doctor } from 'src/app/Models/doctor';
import { Specialty } from 'src/app/Models/specialty';
import { DoctorsService } from 'src/app/Services/doctors.service';
import { SpecialtiesService } from 'src/app/Services/specialties.service';
import { AdminSideNavComponent } from '../admin-side-nav/admin-side-nav.component';
@Component({
  selector: 'app-add-doctor',
  templateUrl: './add-doctor.component.html',
  styleUrls: ['./add-doctor.component.css']
})
export class AddDoctorComponent implements OnInit {
  doctor!:any
  addnew!:Doctor
  phonePattern="(01)[0-9]{9}";
  specialty:Specialty[]=[]
  constructor(
    private doctorSrvice:DoctorsService,
    private specialtyService:SpecialtiesService
    ) { }
  // validation
  loginForm=new FormGroup({
    username:new FormControl('',[
      Validators.required,
      Validators.minLength(3)]),
    fname:new FormControl('',[
      Validators.required,
      Validators.minLength(3)
    ]),
    lname:new FormControl('',[
      Validators.required,
      Validators.minLength(3)
    ]),
    gender:new FormControl('',[
      Validators.required,
    ]),
    title:new FormControl('',[
      Validators.required,
    ]),
    specialization:new FormControl('',[
      Validators.required,
    ]),
    phone:new FormControl('',[
      Validators.required,
      Validators.pattern(this.phonePattern)

    ]),
    password : new FormControl('',[
      Validators.required,
      Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')
      // At least 8 characters in length
      // Lowercase letters
      // Uppercase letters
      // Numbers
     // Special characters
    ])
  })
  ngOnInit(): void {
    this.getAllSpecialties()
  }

  sendDataOfDoctor(data:NgForm){
   this.doctor=data
   console.log(this.doctor);
   
    this.doctorSrvice.addDoctor(this.doctor).subscribe((res)=>this.addnew=res)
    console.log(this.addnew);
    
    
  }
  
  getAllSpecialties(){
    this.specialtyService.getAllSpecialties().subscribe(
      (specialty)=>{
        this.specialty=specialty;
      }
    )
  }
  get username(){
    return this.loginForm.get('username');
  }
  get fname(){
    return this.loginForm.get('fname');
  }
  get lname(){
    return this.loginForm.get('lname');
  }
  get gender(){
    return this.loginForm.get('gender');
  }
  get title(){
    return this.loginForm.get('title');
  }
  get specialization(){
    return this.loginForm.get('specialization');
  }
  get phone(){
    return this.loginForm.get('phone');
  }
  get password(){
    return this.loginForm.get('password');
  }
  
}
