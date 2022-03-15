import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DoctorserviceService } from 'src/app/doctorservice/doctorservice.service';

@Component({
  selector: 'app-doctor-edit-profile',
  templateUrl: './doctor-edit-profile.component.html',
  styleUrls: ['./doctor-edit-profile.component.css']
})
export class DoctorEditProfileComponent implements OnInit {

  constructor(private _Doctorservic:DoctorserviceService , private router:Router) { }
  editDocData:any={}
  cities:string[]=[];
  message!:any

  doctorEditForm:FormGroup = new FormGroup({
    fname:new FormControl(this.editDocData.fname , [Validators.required , Validators.minLength(4) ]),
    lname:new FormControl(this.editDocData.lname, [Validators.required , Validators.minLength(4) ]),
    dy:new FormControl(this.editDocData.dy, [Validators.required]),
    fees:new FormControl(this.editDocData.fees, [Validators.required]),
    street:new FormControl(this.editDocData.street, [Validators.required]),
    city:new FormControl(this.editDocData.city, [Validators.required]),
    phone:new FormControl(this.editDocData.phones, [Validators.required]),
    title:new FormControl(this.editDocData.title, [Validators.required]),
    description:new FormControl(this.editDocData.description, [Validators.required , Validators.minLength(15)]),
  }); 
  

  ngOnInit(): void {
    this.cities.push("giza");
    this.cities.push("Cairo");    
    this.cities.push("Alexandria");

    this._Doctorservic.getDoctorEditProfile().subscribe((response)=>{
      this.editDocData = response;
      console.log(this.editDocData);
      this.doctorEditForm= new FormGroup({
        fname:new FormControl(this.editDocData.fname , [Validators.required , Validators.minLength(4)]),
       lname:new FormControl(this.editDocData.lname, [Validators.required , Validators.minLength(4)]),
        dy:new FormControl(this.editDocData.description, [Validators.required ]),
        fees:new FormControl(this.editDocData.fees, [Validators.required]),
        street:new FormControl(this.editDocData.street, [Validators.required , Validators.minLength(3)]),
        city:new FormControl(this.editDocData.city, [Validators.required]),
        phone:new FormControl(this.editDocData.phone, [Validators.required]),
        title:new FormControl(this.editDocData.title, [Validators.required]),
        description:new FormControl(this.editDocData.description, [Validators.required , Validators.minLength(15)]),
      }); 
    });
  }
  addPhone(formphone:any)
  {
    /*console.log(formphone);
    console.log(this.editDocData.phones);*/

    if( this.editDocData.phones.includes(formphone))
    {
      console.log("already in");
    }
    else
    {
      this.editDocData.phones.push(formphone);
    }
    
    
  }
  deletePhone(formphone:any)
  {
    //console.log(formphone);
    //console.log(this.editDocData.phones);
    if( this.editDocData.phones.includes(formphone))
    {
      this.editDocData.phones.splice(this.editDocData.phones.indexOf(formphone) ,1);    }
    else
    {
      console.log("not included")
    }
   /* for(let i = 0 ; i<this.editDocData.phones ; i++)
    {
      if( this.editDocData.phones[i] == formphone)
      {
        this.editDocData.phones.splice( i,1);
      }
    }*/
  }
  submitEditDoctor(form:any)
  {
    //console.log(form);
    this._Doctorservic.updateDoctorEditProfile(form).subscribe((response)=>{
     // console.log(response)
     //window.location.reload();
     alert("updated");
      /*window.setTimeout(() =>{
      this.router.navigate(["doctordashboard"]);
     }, 5000);*/

    
    },() => this.message='Updated successful',
    )
    /*if(form.fName && form.lName && form.Gender && form.Phones && form.City)
    {
      console.log(form);
    }
    else
    {
      console.log(form.Phones);
    }*/
  }
}
