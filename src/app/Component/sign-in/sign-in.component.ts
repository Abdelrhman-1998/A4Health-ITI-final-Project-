import { Component, OnInit } from '@angular/core';
import { FormGroup ,FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor() { }
  loginForm:FormGroup = new FormGroup({
    Username:new FormControl(null, [Validators.required , Validators.minLength(4)]),
    Password:new FormControl(null, [Validators.required , Validators.minLength(4)]),
  }); 
  ngOnInit(): void {
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
    console.log(loginValue)
    
  }


}
