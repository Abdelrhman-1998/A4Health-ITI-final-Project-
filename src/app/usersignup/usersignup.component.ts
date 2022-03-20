import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Router } from '@angular/router';
import { SignUpService } from '../Services/sign-up.service';


@Component({
  selector: 'app-usersignup',
  templateUrl: './usersignup.component.html',
  styleUrls: ['./usersignup.component.css']
})
export class UsersignupComponent implements OnInit {

  constructor(
    private signUpServices:SignUpService,
    private router:Router
    ) { }
  hide:boolean=false;
  ifV:boolean=false;
  ifV1:any=null;
  save:boolean=false;
  data:any;
  response:any
  message!:string;
  code!:number
  userId!:any;
  readonly:boolean=false
  signupForm:FormGroup = new FormGroup({
    fname:new FormControl(null , [Validators.required , Validators.minLength(4)]),
    lname:new FormControl(null, [Validators.required , Validators.minLength(4)]),
    username:new FormControl(null, [Validators.required , Validators.minLength(4)]),
    password:new FormControl(null, [Validators.required , Validators.minLength(8)]),
    phone:new FormControl(null, [Validators.required , Validators.pattern(/^01[0125][0-9]{8}$/)]),
    gender:new FormControl(null, [Validators.required]),
    verifyM:new FormControl(null),
  }); 
  
  ngOnInit(): void {

    this.check()

  }
  show()
  {
    this.ifV=true;
    this.ifV1="das";
    this.hide=true;

    // console.log("dasd")
  }
//send data from form
  submitManageProfile(formvalue:any)
  {
    this.data=formvalue
    this.signUpServices.SignUp(this.data).subscribe(
      (res)=>{
        this.response=res
        console.log(this.response.code);
        console.log(this.response.id);
        localStorage.setItem('userId',this.response.id)
        localStorage.setItem('code',this.response.code)
        this.userId=this.response.id
        
      },(error)=>{
        this.message=error
      }
    )
    console.log(formvalue)
    this.userId=  localStorage.getItem('userId')
  }
 //code
  getmv(code:any)
  {
    if(localStorage.getItem('code')===code){
      this.save=true;
      this.readonly=true;
    }
    // console.log(mv)
    ;
  }
  Save(){
    this.router.navigate(['signin'])
  }
  
  check()
  {


    var formSubmitting = false;
   var setFormSubmitting = function() { formSubmitting = true; };


/*window.onload = function() {
    window.addEventListener("beforeunload", function (e) {
        if (formSubmitting) {
            return undefined;
        }

        var confirmationMessage = 'It looks like you have been editing something. '
                                + 'If you leave before saving, your changes will be lost.';
        
        (e || window.event).returnValue = confirmationMessage; //Gecko + IE
        return confirmationMessage; //Gecko + Webkit, Safari, Chrome etc.
    });
};*/


    window.addEventListener("beforeunload",  (e) =>{

      // this.signUpServices.delete(this.userId).subscribe(
      //   (res)=>{
      //     console.log(res);
      //   }
      // )
      localStorage.removeItem('userId')

    window.addEventListener("beforeunload", function (e) {

      var confirmationMessage = 'It looks like you have been editing something. '
                              + 'If you leave before saving, your changes will be lost.';
  console.log(confirmationMessage);
  
      (e || window.event).returnValue = confirmationMessage; //Gecko + IE
      return confirmationMessage; //Gecko + Webkit, Safari, Chrome etc.
  });
  })}
}
