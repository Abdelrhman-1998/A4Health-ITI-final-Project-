import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-usersignup',
  templateUrl: './usersignup.component.html',
  styleUrls: ['./usersignup.component.css']
})
export class UsersignupComponent implements OnInit {

  constructor() { }
  hide:boolean=false;
  ifV:boolean=false;
  ifV1:any=null;

  signupForm:FormGroup = new FormGroup({
    fName:new FormControl(null , [Validators.required , Validators.minLength(4)]),
    lName:new FormControl(null, [Validators.required , Validators.minLength(4)]),
    Username:new FormControl(null, [Validators.required , Validators.minLength(4)]),
    Password:new FormControl(null, [Validators.required , Validators.minLength(4)]),
    Phone:new FormControl(null, [Validators.required , Validators.pattern(/^[+0-9]{12}$/)]),
    Gender:new FormControl(null, [Validators.required]),
    verifyM:new FormControl(null),
  }); 
  
  ngOnInit(): void {
    
  }
  show()
  {
    this.ifV=true;
    this.ifV1="das";
    this.hide=true;
    console.log("dasd")
  }
  submitManageProfile(formvalue:any)
  {
    console.log(formvalue)
  }
  getmv(mv:any)
  {
    console.log(mv)
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
    window.addEventListener("beforeunload", function (e) {
      var confirmationMessage = 'It looks like you have been editing something. '
                              + 'If you leave before saving, your changes will be lost.';
  
      (e || window.event).returnValue = confirmationMessage; //Gecko + IE
      return confirmationMessage; //Gecko + Webkit, Safari, Chrome etc.
  });
  }
}
