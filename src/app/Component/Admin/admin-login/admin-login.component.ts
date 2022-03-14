import { Component, OnInit } from '@angular/core';
import{NgForm,FormControl,FormGroup,Validators} from '@angular/forms'
import { Router } from '@angular/router';
import { User } from 'src/app/Models/user';
import { LoginService } from 'src/app/Services/login-service.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  user!:any
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
test:any
  constructor(
    private loginServises:LoginService,
    private router:Router
    ) 
    {}

  ngOnInit(): void {
  
      this.isSuccessful==this.loginServises.isUserlogged
      
  }
login=new FormGroup({
  username:new FormControl('',[
    Validators.required,
    Validators.minLength(3)]),
  password:new FormControl('',[
    Validators.required,
  ])
})
get username(){
  return this.login.get('username');
}
get password(){
  return this.login.get('password');
}

loginAdmin(data:NgForm){
  this.user=data
  this.loginServises.login(this.user).subscribe(
    (log)=>{
      this.isSuccessful = true;
      this.isSignUpFailed = false;  
      this.test=log
      if(this.test.error){
        this.router.navigate(['/admin'])
      }else{
        // Authorization: Bearer <token>
        localStorage.setItem('Authorization','Bearer '+this.test.token)
        setTimeout(()=>{
          this.router.navigate(['/admin/doctor'])
        },2000)
      }
    console.log(this.test.token);
    }
   
  )
  // this.router.navigate(['/admin/doctor'])
//  console.log(this.user);
  
}
}
