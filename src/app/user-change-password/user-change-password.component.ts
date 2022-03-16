import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,Validators } from '@angular/forms';
import { PatientsService } from '../Services/patients.service';
import { GlobaltokenService } from '../gt/globaltoken.service';
@Component({
  selector: 'app-user-change-password',
  templateUrl: './user-change-password.component.html',
  styleUrls: ['./user-change-password.component.css']
})
export class UserChangePasswordComponent implements OnInit {

  constructor(private patient_password:PatientsService,private patient:GlobaltokenService) { }
  changePasswordForm:FormGroup = new FormGroup({
    password:new FormControl(null , [Validators.required , Validators.minLength(8) , Validators.maxLength(20)]),
    newpassword:new FormControl(null, [Validators.required , Validators.minLength(8) , Validators.maxLength(20)]),
    confirmpassword:new FormControl(null, [Validators.required , Validators.minLength(8) , Validators.maxLength(20)])
  }); 
  ngOnInit(): void {

  }
  submitChangePassword(form:any)
  {
    // console.log();

    let patient_id=this.patient.theid;
    let password_object={"old_password":form.password,"password":form.newpassword,"password_confirmation":form.confirmpassword};
    console.log(password_object);
    this.patient_password.changePassword(patient_id,password_object).subscribe(res=>{
        console.log(res);
    },err=>{
        console.log(err);
    })
  }
}

