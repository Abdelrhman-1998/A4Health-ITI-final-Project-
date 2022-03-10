import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup,Validators,NgForm} from '@angular/forms'
import { LoginService } from 'src/app/Services/login.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {
user:any
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  constructor(private loginServises:LoginService) { }
  loginForm=new FormGroup({
    username:new FormControl('',[
      Validators.required,
      Validators.minLength(3)]),
    password : new FormControl('',[Validators.required])
  })

  loginUser(data:NgForm){
    this.user=data
    this.loginServises.login(this.user).subscribe(
      (log)=>{
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    )
  }
  get username(){
    return this.loginForm.get('username');
  }
  get password(){
    return this.loginForm.get('password');
  }

  ngOnInit(): void {
  }

}
