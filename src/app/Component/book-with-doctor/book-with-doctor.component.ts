import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { Doctor } from "../../../app/Models/doctor";
import { Review } from "../../../app/Models/review";
import { DoctorsService } from "../../../app/Services/doctors.service";
import { ReviewsService } from "../../../app/Services/reviews.service";
import { DoctorService } from "src/app/Services/doctor.service";
import { AppointmentsComponent } from "../search_doctors/appointments_tables/appointments/appointments.component";
@Component({
  selector: "app-book-with-doctor",
  templateUrl: "./book-with-doctor.component.html",
  styleUrls: ["./book-with-doctor.component.css"],
})
export class BookWithDoctorComponent implements OnInit {
  show: boolean = false;
  showAllReviews: boolean = false;
  cardDoctorId: number = 2;
  doctor!: Doctor;
  overAllRating!:Review[];
  totalRate:number=0
  stars:number[]=[];
  halfstar:boolean=false
  // rateNumber:number=0
  // reviewwithRateNumber!:Review
  constructor(
    private httpClient: HttpClient,
    private doctorService: DoctorsService,
    private reviewsService: ReviewsService


  ) {}
 

  ngOnInit(): void {
    
    this.getDoctorByID();
    this.getOverAllRating();

  }
  showMore() {
    this.show = !this.show;
  }
  showReviews() {
    this.showAllReviews = !this.showAllReviews;
  }
  getDoctorByID() {
    this.doctorService.getDoctorWithID(this.cardDoctorId).subscribe(
      (doctor:any) => {
        this.doctor = doctor;
      },
      (err:any) => console.log("HTTP Error", err),
      () => console.log("HTTP request completed.")
    );
  }
  getOverAllRating() {
    this.reviewsService.getReviewByDoctorID(this.cardDoctorId).subscribe(
      (review:any) => {
       let total=0
        review.forEach((revRate:any)=>{
          total += revRate.rating
          this.totalRate =total/ review.length;
          
          
        })
        if(total% review.length ===1){
            this.halfstar=true;            
            this.stars.length=(this.totalRate )
          }else{
            this.stars.length=(this.totalRate )
          }
        this.overAllRating=review;

      }
    );
  }


}
