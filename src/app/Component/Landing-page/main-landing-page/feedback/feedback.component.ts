import { Component, OnInit } from '@angular/core';
import { Doctor } from '../../../../../app/Models/doctor';
import { Patient } from '../../../../../app/Models/patient';
import { Review } from '../../../../../app/Models/review';
import { DoctorsService } from '../../../../../app/Services/doctors.service';
import { PatientsService } from '../../../../../app/Services/patients.service';
import { ReviewsService } from '../../../../../app/Services/reviews.service';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css'],
})
export class FeedbackComponent implements OnInit {
  patients: Patient[]=[];
  reviews: Review[]=[];
  doctors: Doctor[] = [];
  patientname!: string;

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
        this.reviews = review;
        this.patientServices.getAllPatients().subscribe((patient) => {
          // this.patients = patient;
          review.forEach(rev => {
            patient.forEach(pat => {
              if(rev.patient_id==pat.id){
                this.patients.push(pat)
                console.log(rev.patient_id+" "+pat.fname);
              }
            });
          });
          
          console.log(this.patients);
          console.log(this.reviews);
          
        });
      },
      (err) => console.log('HTTP Error', err),
      () => console.log('HTTP request completed.')
    );
  }

  // OWl Plugin
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 600,
    navText: ['&#8249', '&#8250;'],
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
