import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DoctorserviceService } from 'src/app/doctorservice/doctorservice.service';

@Component({
  selector: 'app-doctorpassword',
  templateUrl: './doctorpassword.component.html',
  styleUrls: ['./doctorpassword.component.css']
})
export class DoctorpasswordComponent implements OnInit {

  constructor(private _Doctorservic:DoctorserviceService , private router:Router) { }
  message!:any

  changePasswordForm:FormGroup = new FormGroup({
    old_password:new FormControl(null , [Validators.required , Validators.minLength(8)]),
    password:new FormControl(null, [Validators.required , Validators.minLength(8)]),
    password_confirmation:new FormControl(null, [Validators.required , Validators.minLength(8)])

  }); 
  ngOnInit(): void {
  }
  submitChangePassword(form:any)
  {
    console.log(form);
    this._Doctorservic.updatePassword(form).subscribe((response)=>{ 
      console.log(response);
      this.router.navigate(["doctordashboard/profile"])
    },() => this.message='Updated successful');
  }

}
