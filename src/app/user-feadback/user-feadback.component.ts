import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Review } from '../Models/review';
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
    private activatedRoute: ActivatedRoute
    ) { }

  ngOnInit(): void {
  //  this.DoctorId = this.activatedRoute.snapshot.params['docotrID'];
    
  }

  sendFeedback(data:NgForm){
    this.feedback=data
    console.log(data.value);
    
    this.reviewServices.sendReview(this.feedback.value).subscribe(

      (res)=>this.newFeedback=res
      
      
      )
   ;


   }
}
