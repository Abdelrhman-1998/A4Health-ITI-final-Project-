import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-usersignup',
  templateUrl: './usersignup.component.html',
  styleUrls: ['./usersignup.component.css']
})
export class UsersignupComponent implements OnInit {

  constructor() { }
  hide:boolean=false;
  signupForm:FormGroup = new FormGroup({
    fName:new FormControl(null , [Validators.required , Validators.minLength(4)]),
    lName:new FormControl(null, [Validators.required , Validators.minLength(4)]),
    Username:new FormControl(null, [Validators.required , Validators.minLength(4)]),
    Password:new FormControl(null, [Validators.required , Validators.minLength(4)]),
    Phone:new FormControl(null, [Validators.required , Validators.pattern(/^[+0-9]{12}$/)]),
    Gender:new FormControl(null, [Validators.required]),
  }); 
  
  ngOnInit(): void {
    
  }
  show()
  {
    this.hide=true;
    console.log("dasd")
  }
  submitManageProfile(formvalue:any)
  {
    console.log(formvalue)
  }
  getmv(mv:any)
  {
    console.log(mv)
  }
}
