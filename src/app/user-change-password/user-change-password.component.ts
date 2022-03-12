import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,Validators } from '@angular/forms';


@Component({
  selector: 'app-user-change-password',
  templateUrl: './user-change-password.component.html',
  styleUrls: ['./user-change-password.component.css']
})
export class UserChangePasswordComponent implements OnInit {

  constructor() { }
  changePasswordForm:FormGroup = new FormGroup({
    password:new FormControl(null , [Validators.required , Validators.minLength(2) , Validators.maxLength(20)]),
    newpassword:new FormControl(null, [Validators.required , Validators.minLength(2) , Validators.maxLength(20)])
  }); 
  ngOnInit(): void {
  }
  submitChangePassword(form:any)
  {
    console.log(form);
  }
}
