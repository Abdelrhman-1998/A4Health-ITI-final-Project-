import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Doctor } from 'src/app/Models/doctor';
import { Patient } from 'src/app/Models/patient';
import { Review } from 'src/app/Models/review';
import { DoctorsService } from 'src/app/Services/doctors.service';
import { PatientsService } from 'src/app/Services/patients.service';
import { ReviewsService } from 'src/app/Services/reviews.service';
import { NgForm, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-feedbacks',
  templateUrl: './feedbacks.component.html',
  styleUrls: ['./feedbacks.component.css'],
})
export class FeedbacksComponent implements OnInit ,OnChanges{

  reviews: Review[] = [];
  patients: Patient[] = [];
  doctors: Doctor[] = [];
  reviewId:any;
  status = '';
  searchResultn!: string;
  searchArray: any = [];
  filter = false;
  rate!: number;
  feedback_id!:number
  show:boolean=true
  p: number = 1;
  count: number = 5;
  message!:string
  constructor(
    private reviewsServices: ReviewsService,
    private patientServices: PatientsService,
    private doctorsServices: DoctorsService,
    private router:Router,
    private activatedRoute: ActivatedRoute,
  ) {}
  ngOnChanges(): void {
    this.feedback_id=this.activatedRoute.snapshot.params['id']
    console.log('inn');
  }
  getReviewId(x:any){
    this.reviewId=x;
  }
  ngOnInit(): void {
    this.getAllReviews();
    // console.log(this.activatedRoute.snapshot.url[1].path=='report');
    this.feedback_id=this.activatedRoute.snapshot.params['id']
    // if(this.activatedRoute.snapshot.url[0].path=='report'){
    //   this.feedback_id=this.activatedRoute.snapshot.params['id']
    //   this.show=false
    // }
  }
  getAllReviews() {
    this.reviewsServices.getAllReviews().subscribe(
      (review) => {
        this.reviews = review;
        this.reviews.forEach((e) => {
         e.rate = Number(e.rate);
        });

        console.log(this.reviews);
      },() => this.message='Delete successful',
      console.error

    );
  }

  delete(id: number) {
    console.log(id);
    this.reviewsServices.deleteReview(id).subscribe(() => {
      this.status = 'Delete successful';
      this.ngOnInit();
      // this.router
      // .navigate(['/admin/feedback'])

      
    });
  }
  counter(i: number) {
    return new Array(i);
  }

 

}

/**
 * 
 *    // this.patientServices.getAllPatients().subscribe((patient) => {
        //   // this.patients = patient;
        //   review.forEach(rev => {
        //     patient.forEach(pat => {
        //       if(rev.patient_id==pat.id){
        //         this.patients.push(pat)
        //         console.log(rev.patient_id+" "+pat.fname);
        //       }
        //     });
        //   });
        //   console.log(this.patients);
        //   console.log(this.reviews);
        // });
        // this.doctorsServices.getAllDoctors().subscribe((doctor) => {
        //   // this.patients = patient;
        //   review.forEach(rev => {
        //     doctor.forEach(pat => {
        //       if(rev.doctor_id==pat.id){
        //         this.doctors.push(pat)
        //         console.log(rev.doctor_id+" "+pat.fname);
        //       }
        //     });
        //   });
        //   console.log(this.doctors);
        //   console.log(this.reviews);
        // });
 */