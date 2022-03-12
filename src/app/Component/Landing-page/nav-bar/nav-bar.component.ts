import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup,Validators} from '@angular/forms'

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {

  constructor() { }
  loginForm=new FormGroup({
    username:new FormControl('',[
      Validators.required,
      Validators.minLength(3)]),
    password : new FormControl('',[Validators.required])
  })
  loginUser(){
    console.log(this.loginForm.value);
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
