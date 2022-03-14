import { Component, OnInit } from '@angular/core';
import{NgForm,FormControl,FormGroup,Validators} from '@angular/forms'
import { Router } from '@angular/router';
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
  files:any
  message!:string
  constructor(
    private doctorSrvice:DoctorsService,
    private  specialtyService:SpecialtiesService,
    private router:Router,
    ) { }
  // validation
  AddDoctor=new FormGroup({
    username:new FormControl('',[
      Validators.required,
      Validators.minLength(4)]),
    fname:new FormControl('',[
      Validators.required,
      Validators.minLength(4)
    ]),
    lname:new FormControl('',[
      Validators.required,
      Validators.minLength(4)
    ]),
    city:new FormControl('',[
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(15)
    ]),
    gender:new FormControl('',[
      Validators.required,
    ]),
    title:new FormControl('',[
      Validators.required,
    ]),
    specialization_id:new FormControl('',[
      Validators.required,
    ]),
    phone:new FormControl('',[
      Validators.required,
      Validators.pattern(this.phonePattern)

    ]),
    description: new FormControl(
       Validators.required,
       Validators.minLength(15),
      //  Validators.maxLength(50)
    ),
    password : new FormControl('',[
      Validators.required,
      Validators.minLength(8)
      // Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')
      // At least 8 characters in length
      // Lowercase letters
      // Uppercase letters
      // Numbers
     // Special characters
    ]),
    street:new FormControl('',[
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20)
    ]),
    fees:new FormControl('',[
      Validators.required,
      Validators.minLength(1),
    ]),
    img_name:new FormControl('',[
      Validators.required,
    ])
  })
  ngOnInit(): void {
    this.getAllSpecialties()
  }
  upLoadImg(event:any){
    this.files=event.target.files[0]
    console.log(this.files);
    
  }

  sendDataOfDoctor(data:NgForm){
    let formData= new FormData();
    formData.append('username',this.AddDoctor.value.username);
    formData.append('fname',this.AddDoctor.value.fname);
    formData.append('lname',this.AddDoctor.value.lname);
    formData.append('city',this.AddDoctor.value.city);
    formData.append('gender',this.AddDoctor.value.gender);
    formData.append('title',this.AddDoctor.value.title);
    formData.append('specialization_id',this.AddDoctor.value.specialization_id);
    formData.append('phone',this.AddDoctor.value.phone);
    formData.append('description',this.AddDoctor.value.description);
    formData.append('password',this.AddDoctor.value.password);
    formData.append('street',this.AddDoctor.value.street);
    formData.append('fees',this.AddDoctor.value.fees);
    formData.append('img_name',this.files,this.files.name);
    



   this.doctor=data
   this.doctor.img_name =this.files
   console.log(this.doctor);
  this.doctorSrvice.addDoctor(formData).subscribe(
    (res)=>{
      // console.log(this.files);
      console.log("test");
      
      this.addnew=res
      this.router
      .navigate(['/admin/doctor'])

      console.log(res);
      // setTimeout(()=>{
      //   this.router.navigate(['/admin/doctor'])
      // },3000)
      
    }, 
    () => this.message='Add successful',
      console.error
  )
  }
  
  getAllSpecialties(){
    this.specialtyService.getAllSpecialties().subscribe(
      (specialty)=>{
        this.specialty=specialty;
        console.log(this.specialty);
        
      }
    )
  }
  get username(){
    return this.AddDoctor.get('username');
  }
  get fname(){
    return this.AddDoctor.get('fname');
  }
  get lname(){
    return this.AddDoctor.get('lname');
  }
  get gender(){
    return this.AddDoctor.get('gender');
  }
  get title(){
    return this.AddDoctor.get('title');
  }
  get specialization(){
    return this.AddDoctor.get('specialization_id');
  }
  get phone(){
    return this.AddDoctor.get('phone');
  }
  get password(){
    return this.AddDoctor.get('password');
  }
  get city(){
    return this.AddDoctor.get('city');
  }
  get Description(){
    return this.AddDoctor.get('description');
  }
  get Street(){
    return this.AddDoctor.get('street');
  }
  get Fees(){
    return this.AddDoctor.get('fees');
  }
  get img_name(){
    return this.AddDoctor.get('img_name');
  }

 
}
