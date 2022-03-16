import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Doctor } from '../../../../app/Models/doctor';
import { Patient } from '../../../../app/Models/patient';
import { Review } from '../../../../app/Models/review';
import { DoctorsService } from '../../../../app/Services/doctors.service';
import { PatientsService } from '../../../../app/Services/patients.service';
import { ReviewsService } from '../../../../app/Services/reviews.service';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {

  patients:Patient[]=[];
  rewiews:Review[]=[]; 
  doctors:Doctor[]=[];
  stars:number[]=[];

  reviewwithDoctorID:Review[]=[];
  // cardDoctorId:number=2
  // cardDoctorId:number=2
 
  @Input() DoctorId:any;

  constructor(
    // private patientServices:PatientsService,
    // private doctorServices:DoctorsService,
    private reviewService:ReviewsService,
    private activatedRoute: ActivatedRoute

  ) { 

  }

  ngOnInit(): void {
console.log(this.DoctorId);

   // this.getAllReviews()
   this.getReviewByDoctorId()
  }
// getAllReviews(){
//   this.reviewService.getAllReviews().subscribe(
//     (review)=>{
//      for(let rev of review){
//        this.stars.length=rev.rating;
//        console.log(this.stars);
//      }
//       this.rewiews=review
//     })
// }
getReviewByDoctorId(){

  this.reviewService.getReviewByDoctorID(this.DoctorId).subscribe((review)=>{
    for(let rev of review){
    this.stars.length=rev.rate;
    }
    this.reviewwithDoctorID=review;
  })

}
counter(i: number) {
  return new Array(i);
}


}
