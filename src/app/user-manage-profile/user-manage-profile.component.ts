import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,Validators } from '@angular/forms';
import { UserreservationsService } from '../userreservations.service';
import { PatientsService } from '../Services/patients.service';
import { GlobaltokenService } from '../gt/globaltoken.service';
import { HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-user-manage-profile',
  templateUrl: './user-manage-profile.component.html',
  styleUrls: ['./user-manage-profile.component.css']
})
export class UserManageProfileComponent implements OnInit {
userData:any={fName:"",lName:"",Gender:"",Phones:[],City:""};
header:any =new HttpHeaders().set("Authorization",localStorage.getItem('Authorization')!);
  constructor(private _UserreservationsService:UserreservationsService,private paitentService:PatientsService, private patient:GlobaltokenService ) {
    
   }
 
  
numbers:number[]=[];
city:string[]=[];
/*manageProfileForm:FormGroup = new FormGroup({
  fName:new FormControl(null , [Validators.required , Validators.minLength(2) , Validators.maxLength(20)]),
  lName:new FormControl(null, [Validators.required , Validators.minLength(2) , Validators.maxLength(20)]),
  Gender:new FormControl(null, [Validators.required]),
  Phones:new FormControl(this.numbers,[Validators.required]),
  City:new FormControl(null,[Validators.required])
}); */
manageProfileForm:FormGroup = new FormGroup({
  fName:new FormControl(this.userData.fName , [Validators.required , Validators.minLength(4) , Validators.maxLength(20)]),
  lName:new FormControl(this.userData.lName, [Validators.required , Validators.minLength(4) , Validators.maxLength(20)]),
  Gender:new FormControl(this.userData.Gender, [Validators.required]),
  // Phones:new FormControl(this.userData.Phones,[Validators.required]),
  phone:new FormControl(this.userData.phone,[Validators.required,Validators.minLength(11),Validators.maxLength(11)])
  // City:new FormControl(this.userData.City,[Validators.required])
}); 

  ngOnInit(): void {
    this.numbers.push(546456);
    this.numbers.push(2301231);
    this.city.push("giza");
    this.city.push("Cairo");
    // this._UserreservationsService.getUserData().subscribe((response)=>{
    //   this.userData = response;
    //   this.manageProfileForm = new FormGroup({
    //     fName:new FormControl(this.userData.fName , [Validators.required , Validators.minLength(2) , Validators.maxLength(20)]),
    //     lName:new FormControl(this.userData.lName, [Validators.required , Validators.minLength(2) , Validators.maxLength(20)]),
    //     Gender:new FormControl(this.userData.Gender, [Validators.required]),
    //     Phones:new FormControl(this.userData.Phones,[Validators.required]),
    //     City:new FormControl(this.userData.City,[Validators.required])
    //   }); 
      
    // });
    let patient_id=this.patient.theid;
    console.log(patient_id);

      this.paitentService.getPatientByID(patient_id).subscribe((response)=>{
      this.userData = response;
      console.log(response);
      this.manageProfileForm = new FormGroup({
        fName:new FormControl(this.userData.fname , [Validators.required , Validators.minLength(4) , Validators.maxLength(20)]),
        lName:new FormControl(this.userData.lname, [Validators.required , Validators.minLength(4) , Validators.maxLength(20)]),
        Gender:new FormControl(this.userData.gender, [Validators.required]),
        phone:new FormControl(this.userData.phone,[Validators.required,Validators.minLength(11),Validators.maxLength(11)])
        // city:new FormControl(this.userData.city,[Validators.required])
      }); 
      
    });

    
  }
  addPhone(formphone:any)
  {
    console.log(formphone);
    const phone = Number(formphone);
    if( this.userData.Phones.includes(phone))
    {
      console.log("already in");
    }
    else
    {
      this.userData.Phones.push(phone);
    }
    
  }
  deletePhone(formphone:any)
  {
    const phone = Number(formphone);

    if( this.userData.Phones.includes(phone))
    {
      this.userData.Phones.splice(this.userData.Phones.indexOf(phone) ,1);    }
    else
    {
      console.log("not included")
    }
  }

  submitManageProfile(form:any)
  {
    // if(form.fName && form.lName && form.Gender && form.Phones && form.City)
    // {
    //   console.log(form);
    // }
    // else
    // {
    //   console.log(form.Phones);
    // }
    // let url = 
    if(form.fName && form.lName && form.phone){
      this.paitentService.updatePatient(this.patient.theid,{"fname":form.fName,"lname":form.lName,"phone":form.phone}).subscribe(res=>{
        console.log(res);
        window.location.reload();
      },err=>{
            console.log(err);
      })
    }

  }
  clear(formphone:any)
  {
    formphone=" ";
  }
}
