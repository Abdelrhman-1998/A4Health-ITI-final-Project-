import { Component, OnInit } from '@angular/core';
import { Doctor } from 'src/app/Models/doctor';
import { Patient } from 'src/app/Models/patient';
import { Review } from 'src/app/Models/review';
import { DoctorsService } from 'src/app/Services/doctors.service';
import { PatientsService } from 'src/app/Services/patients.service';
import { ReviewsService } from 'src/app/Services/reviews.service';
import{NgForm,FormControl,FormGroup,Validators} from '@angular/forms'

@Component({
  selector: 'app-feedbacks',
  templateUrl: './feedbacks.component.html',
  styleUrls: ['./feedbacks.component.css']
})
export class FeedbacksComponent implements OnInit {
  reviews:Review[]=[]
  patients:Patient[]=[]
  doctors:Doctor[]=[]
  status=''
  searchResult:string=''
  p: number = 1;
count: number = 5;
  constructor(
    private reviewsServices:ReviewsService,
    private patientServices:PatientsService,
    private doctorsServices:DoctorsService
  ) { }

  ngOnInit(): void {
    this.getAllReviews()
  }
  getAllReviews() {
    this.reviewsServices.getAllReviews().subscribe(
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
        this.doctorsServices.getAllDoctors().subscribe((patient) => {
          // this.patients = patient;
          review.forEach(rev => {
            patient.forEach(pat => {
              if(rev.doctor_id==pat.id){
                this.doctors.push(pat)
                console.log(rev.doctor_id+" "+pat.fname);
              }
            });
          });
          console.log(this.doctors);
          console.log(this.reviews);
        });
      },
      (err) => console.log('HTTP Error', err),
      () => console.log('HTTP request completed.')
    );
  }

  delete(id:number){
    this.reviewsServices.deleteReview(id).subscribe(() => {
      this.status = 'Delete successful'
    this.ngOnInit()
    })

  }
  counter(i: number) {
    return new Array(i);
  }
}
