import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GlobaltokenService } from '../gt/globaltoken.service';
import { Review } from '../Models/review';
import { PatientsService } from '../Services/patients.service';
import { ReviewsService } from '../Services/reviews.service';

@Component({
  selector: 'app-user-feadback',
  templateUrl: './user-feadback.component.html',
  styleUrls: ['./user-feadback.component.css']
})
export class UserFeadbackComponent implements OnInit {
  feedback:any
  newFeedback!:Review
  DoctorId = this.activatedRoute.snapshot.params['docotrID'];
  constructor(
    private reviewServices:ReviewsService,
    private activatedRoute: ActivatedRoute,
    private patient:PatientsService,
    private global:GlobaltokenService,
    private route:Router
    ) { }

  ngOnInit(): void {
   this.DoctorId = this.activatedRoute.snapshot.params['docotrID'];
    console.log(this.DoctorId);
  }

  sendFeedback(data:NgForm){
    let patient_id=this.global.theid;
    this.feedback=data;

    let object ={"patient_id":patient_id,"doctor_id": this.DoctorId,"rate":data.value.rating,"message":data.value.message};
    console.log(data.value);
    console.log(object);
    this.patient.submitFeedBack(patient_id,object).subscribe(res=>{
      console.log(res);
      this.route.navigate(['/userdashboard/manageprofile']);
    },err=>{
      console.log(err);
    })
  //   this.reviewServices.sendReview(this.feedback.value).subscribe(

  //     (res)=>this.newFeedback=res
      
      
  //     )
  //  ;


   }
}
