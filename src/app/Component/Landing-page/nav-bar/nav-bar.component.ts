import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup,Validators} from '@angular/forms'
import { GlobaltokenService } from 'src/app/gt/globaltoken.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {
  confirmCondition=this.checkAuth.show_username;
  constructor(private checkAuth:GlobaltokenService) { }
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
   this.checkAuth.itemValue.subscribe(res=>{
     console.log(res);
     if(res !="null"){
          this.confirmCondition=true;
     }
     else{
       this.confirmCondition=false;
     }
   },err=>{
     console.log(err);
   })
    // this.confirmCondition=this.checkAuth.show_username;
    // this.checkAuth.itemValue.subscribe(res=>{
    //   console.log(res);
    //     this.confirmCondition=this.checkAuth.show_username;   
    // },err=>{
    //   console.log(err)
    // })
  }

}
