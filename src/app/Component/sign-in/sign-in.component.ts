import { Component, OnInit } from '@angular/core';
import { FormGroup ,FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { GlobaltokenService } from 'src/app/gt/globaltoken.service';
import { UserloginService } from 'src/app/userguard/userlogin.service';
import { AfterViewInit } from '@angular/core';
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
  id:any;

  //

  username:any;

  getUsername(x:any){
    this.username=x.value;
  }
  constructor(
    private loginServises:UserloginService,
    private router:Router,
    private checkAuth:GlobaltokenService
  ) { 
   
  }
  loginForm:FormGroup = new FormGroup({
    username:new FormControl(null, [Validators.required , Validators.minLength(4)]),
    password:new FormControl(null, [Validators.required , Validators.minLength(4)]),
  }); 
  ngOnInit(): void {
   
    this.isSuccessful==this.loginServises.isUserlogged
  }
 
  submitLogIn(loginValue:any)
  {
    this.username=loginValue.username;
    console.log(loginValue)
    this.user=loginValue;
    console.log(this.user);
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
          this.checkAuth.thetoken="Bearer "+this.test.token;
          this.checkAuth.theid=this.test.id;
          this.checkAuth.theUsername=this.username;
          // localStorage.setItem('Authorization','Bearer '+this.test.token);
          // localStorage.setItem('id',this.test.id);

          setTimeout(()=>{
            ///////////////
            //this.router.navigate(['/doctordashboard/appointment'])
            if(this.test.type == "doctor")
            {
              this.router.navigate(['/doctordashboard/appointment'])
            }
            else
            {
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
