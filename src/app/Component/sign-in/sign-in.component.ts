import { Component, OnInit } from '@angular/core';
import { FormGroup ,FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { UserloginService } from 'src/app/userguard/userlogin.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  user!:any
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  constructor(
    private loginServises:UserloginService,
    private router:Router
  ) { }
  loginForm:FormGroup = new FormGroup({
    Username:new FormControl(null, [Validators.required , Validators.minLength(4)]),
    Password:new FormControl(null, [Validators.required , Validators.minLength(4)]),
  }); 
  ngOnInit(): void {
    this.isSuccessful==this.loginServises.isUserlogged
  }
  submitLogIn(loginValue:any)
  {
    /*if(loginValue==api data )
    {
      redirect to home 
    }
    else
    {
      redirect to login
    }*/
    this.user=loginValue
    this.loginServises.login(this.user).subscribe(
      (log)=>{
        this.isSuccessful = true;
        this.isSignUpFailed = false;  
         if(this.isSuccessful==this.loginServises.isUserlogged){
      this.router.navigate(['Home']);
  
    }
   
      }
     
    )
    this.router.navigate(['/doctordashboard/appointment'])
   console.log(this.user);
    console.log(loginValue)
    
  }

  loginAdmin(data:any){
    
    
  }
}
