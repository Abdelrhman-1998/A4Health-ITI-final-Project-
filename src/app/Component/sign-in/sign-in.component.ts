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
  test:any
  id:any


  constructor(
    private loginServises:UserloginService,
    private router:Router
  ) { }
  loginForm:FormGroup = new FormGroup({
    username:new FormControl(null, [Validators.required , Validators.minLength(4)]),
    password:new FormControl(null, [Validators.required , Validators.minLength(4)]),
  }); 
  ngOnInit(): void {
    //this.isSuccessful==this.loginServises.isUserlogged
  }
  submitLogIn(loginValue:any)
  {
    console.log(loginValue)
    this.user=loginValue
    this.loginServises._login(loginValue).subscribe(
      (log)=>{
        this.isSuccessful = true;
        this.isSignUpFailed = false;  
        this.test=log
        console.log(log)
        if(this.test.error){
          this.router.navigate(['signin'])
        }else{
          // Authorization: Bearer <token>
          localStorage.setItem('Authorization','Bearer '+this.test.token)
          localStorage.setItem('id',this.test.id)
          setTimeout(()=>{
            ///////////////
            //this.router.navigate(['/doctordashboard/appointment'])
            if(this.test.type == "doctor")
            {
              localStorage.setItem('type',"doctor")
              this.router.navigate(['/doctordashboard/appointment'])
            }
            else
            {
              localStorage.setItem('type',"patient")
              this.router.navigate(['/userdashboard/reservations'])
            }
          },2000)
        }
      console.log("token = " , this.test.token);
      }
    )
    // this.router.navigate(['/admin/doctor'])
  //  console.log(this.user);
    
  }

  loginAdmin(data:any){
    
    
  }
}
