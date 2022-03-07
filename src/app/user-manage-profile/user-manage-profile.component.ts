import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,Validators } from '@angular/forms';
import { UserreservationsService } from '../userreservations.service';

@Component({
  selector: 'app-user-manage-profile',
  templateUrl: './user-manage-profile.component.html',
  styleUrls: ['./user-manage-profile.component.css']
})
export class UserManageProfileComponent implements OnInit {
userData:any={fName:"",lName:"",Gender:"",Phones:[],City:""}
  constructor(private _UserreservationsService:UserreservationsService) {
    
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
  fName:new FormControl(this.userData.fName , [Validators.required , Validators.minLength(2) , Validators.maxLength(20)]),
  lName:new FormControl(this.userData.lName, [Validators.required , Validators.minLength(2) , Validators.maxLength(20)]),
  Gender:new FormControl(this.userData.Gender, [Validators.required]),
  Phones:new FormControl(this.userData.Phones,[Validators.required]),
  City:new FormControl(this.userData.City,[Validators.required])
}); 

  ngOnInit(): void {
    this.numbers.push(546456);
    this.numbers.push(2301231);
    this.city.push("giza");
    this.city.push("Cairo");
    this._UserreservationsService.getUserData().subscribe((response)=>{
      this.userData = response;
      this.manageProfileForm = new FormGroup({
        fName:new FormControl(this.userData.fName , [Validators.required , Validators.minLength(2) , Validators.maxLength(20)]),
        lName:new FormControl(this.userData.lName, [Validators.required , Validators.minLength(2) , Validators.maxLength(20)]),
        Gender:new FormControl(this.userData.Gender, [Validators.required]),
        Phones:new FormControl(this.userData.Phones,[Validators.required]),
        City:new FormControl(this.userData.City,[Validators.required])
      }); 
      
    });
    
  }
  addPhone(formphone:any)
  {
    console.log(formphone);
    if( this.userData.Phones.includes(formphone))
    {
      console.log("already in");
    }
    else
    {
      this.userData.Phones.push(formphone);
    }
    
  }
  deletePhone(formphone:any)
  {
    for(let i = 0 ; i<this.userData.Phones ; i++)
    {
      if( this.userData.Phones[i] == formphone)
      {
        this.userData.Phones.splice( i,1);
      }
    }
  }

  submitManageProfile(form:any)
  {
    if(form.fName && form.lName && form.Gender && form.Phones && form.City)
    {
      console.log(form);
    }
    else
    {
      console.log(form.Phones);
    }
  }
}
