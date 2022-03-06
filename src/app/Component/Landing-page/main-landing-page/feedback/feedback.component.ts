import { Component, OnInit } from "@angular/core";
import { Doctor } from "app/Models/doctor";
import { Patient } from "app/Models/patient";
import { Review } from "app/Models/review";
import { DoctorsService } from "app/Services/doctors.service";
import { PatientsService } from "app/Services/patients.service";
import { ReviewsService } from "app/Services/reviews.service";
import { OwlOptions } from "ngx-owl-carousel-o";

@Component({
  selector: "app-feedback",
  templateUrl: "./feedback.component.html",
  styleUrls: ["./feedback.component.css"],
})
export class FeedbackComponent implements OnInit {
  patients!: Patient;
  reviews: Review[] = [];
  doctors: Doctor[] = [];
  patientname!: string;
  patientWithReview: Patient[] = [];
  constructor(
    private patientServices: PatientsService,
    private doctorServices: DoctorsService,
    private reviewService: ReviewsService
  ) {}

  ngOnInit(): void {
    this.getAllReviews();
  }
  getAllReviews() {
    this.reviewService.getAllReviews().subscribe(
      (review) => {
        for (var re of review) {
          this.patientServices
            .getPatientByID(re.patient_id)
            .subscribe((patient) => {
              this.patients = patient;
              this.reviews = review;
              this.patientWithReview.push(this.patients);
            });
        }
        console.log(this.patientWithReview);
      },
      (err) => console.log("HTTP Error", err),
      () => console.log("HTTP request completed.")
    );
  }

  /* 
    this.patientServices.getAllPatients().subscribe((patient)=>{
      let reviewResult=review;
      let patientResult=patient;
      let result = reviewResult.filter(review => patientResult.some(patient => review.patient_id === patient.id));
      console.log(result);
      
     if(result){
       this.patients=patient;
       this.reviews=review;
      this.patients[1]
       
     }
    })
    */

  // OWl Plugin
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 600,
    navText:  ['&#8249', '&#8250;'],
    responsive: {
      0: {
        items: 1,
      },
      800: {
        items: 1,
      },
      1000: {
        items: 2,
      },
    },
    nav: true,
  };
}
