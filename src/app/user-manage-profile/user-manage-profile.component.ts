import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-user-manage-profile',
  templateUrl: './user-manage-profile.component.html',
  styleUrls: ['./user-manage-profile.component.css']
})
export class UserManageProfileComponent implements OnInit {

  constructor() { }
  manageProfileForm:FormGroup = new FormGroup({
    fName:new FormControl(null , [Validators.required , Validators.minLength(2) , Validators.maxLength(20)]),
    lName:new FormControl(null, [Validators.required , Validators.minLength(2) , Validators.maxLength(20)]),
    Gender:new FormControl(null, [Validators.required]),
    Phones:new FormControl(null),
    City:new FormControl(null)
  }); 
  
numbers:number[]=[];
city:string[]=[];

  ngOnInit(): void {
    this.numbers.push(546456);
    this.numbers.push(2301231);
    this.city.push("giza");
    this.city.push("cairo");

  }
  addPhone(formphone:any)
  {
    console.log(formphone);
    if( this.numbers.includes(formphone))
    {
      console.log("already in");
    }
    else
    {
      this.numbers.push(formphone);
    }
    
  }
  deletePhone(formphone:any)
  {
    for(let i = 0 ; i<this.numbers.length ; i++)
    {
      if( this.numbers[i] == formphone)
      {
        this.numbers.splice( i,1);
      }
    }
  }

  submitManageProfile(form:any)
  {
    console.log(form);
  }

}
