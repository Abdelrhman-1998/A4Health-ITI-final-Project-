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
  constructor(
    private changePassword:PasswordService
  ) { }
  changePasswordForm:FormGroup = new FormGroup({
    oldpass:new FormControl(null , [Validators.required , Validators.minLength(8) ]),
    newpass:new FormControl(null, [Validators.required , Validators.minLength(8) ])
  }); 
  ngOnInit(): void {
  }
  submitChangePassword(data:NgForm){
    console.log(data);
    this.passwordData=data
    this.changePassword.changePassword(this.passwordData).subscribe(
      (res)=>{
        console.log(res)
      },() => this.message='Delete successful',
      );
  }
}
