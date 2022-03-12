import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DoctorserviceService } from 'src/app/doctorservice/doctorservice.service';

@Component({
  selector: 'app-doctor-edit-profile',
  templateUrl: './doctor-edit-profile.component.html',
  styleUrls: ['./doctor-edit-profile.component.css']
})
export class DoctorEditProfileComponent implements OnInit {

  constructor(private _Doctorservic:DoctorserviceService) { }
  editDocData:any={}
  cities:string[]=[];

  doctorEditForm:FormGroup = new FormGroup({
    firstname:new FormControl(this.editDocData.firstname , [Validators.required , Validators.minLength(2) , Validators.maxLength(20)]),
    lastname:new FormControl(this.editDocData.lastname, [Validators.required , Validators.minLength(2) , Validators.maxLength(20)]),
    dy:new FormControl(this.editDocData.dy, [Validators.required]),
    fees:new FormControl(this.editDocData.fees, [Validators.required]),
    street:new FormControl(this.editDocData.street, [Validators.required]),
    city:new FormControl(this.editDocData.city, [Validators.required]),
    phones:new FormControl(this.editDocData.phones, [Validators.required]),
    photo:new FormControl(null, [Validators.required]),
  }); 
  

  ngOnInit(): void {
    this.cities.push("giza");
    this.cities.push("Cairo");
    this._Doctorservic.getDoctorEditProfile().subscribe((response)=>{
      this.editDocData = response;
      console.log(this.editDocData);
      this.doctorEditForm= new FormGroup({
        firstname:new FormControl(this.editDocData.firstname , [Validators.required , Validators.minLength(4)]),
       lastname:new FormControl(this.editDocData.lastname, [Validators.required , Validators.minLength(4)]),
        dy:new FormControl(this.editDocData.dy, [Validators.required ]),
        fees:new FormControl(this.editDocData.fees, [Validators.required]),
        street:new FormControl(this.editDocData.street, [Validators.required]),
        city:new FormControl(this.editDocData.city, [Validators.required]),
        phones:new FormControl(this.editDocData.phones, [Validators.required]),
        photo:new FormControl(null, [Validators.required]),
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
    console.log(form);

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
