import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { PasswordService } from 'src/app/Services/password.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
passwordData:any
message!:string
response:any
  constructor(
    private changePassword:PasswordService
  ) { }
  changePasswordForm:FormGroup = new FormGroup({
    old_password:new FormControl(null , [Validators.required , Validators.minLength(8) ]),
    password:new FormControl(null, [Validators.required , Validators.minLength(8) ]),
    password_confirmation:new FormControl(null, [Validators.required , Validators.minLength(8) ]),
  }); 
  ngOnInit(): void {
  }
  submitChangePassword(data:NgForm){
    console.log(data);
    this.passwordData=data
    this.changePassword.changePassword(this.passwordData).subscribe(
      (res)=>{
        this.response=res
      },
      (error)=>{
        if(error.error.message){
          this.message='password incorrect'
        }},() => this.message='Change Password successful',
        );
      
      // console.error
      // ,() => this.message='Change Password successful',
     
    
  }
}
