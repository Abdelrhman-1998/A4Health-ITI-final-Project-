import { Component, OnInit } from '@angular/core';
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
  cardDoctorId:number=2

  constructor(
    // private patientServices:PatientsService,
    // private doctorServices:DoctorsService,
    private reviewService:ReviewsService,
  ) { }

  ngOnInit(): void {


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

  this.reviewService.getReviewByDoctorID(this.cardDoctorId).subscribe((review)=>{
    for(let rev of review){
    this.stars.length=rev.rating;
    }
    this.reviewwithDoctorID=review;
  })

}
counter(i: number) {
  return new Array(i);
}


}
