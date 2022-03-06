import { Component, OnInit } from '@angular/core';
import { Doctor } from 'app/Models/doctor';
import { Patient } from 'app/Models/patient';
import { Review } from 'app/Models/review';
import { DoctorsService } from 'app/Services/doctors.service';
import { PatientsService } from 'app/Services/patients.service';
import { ReviewsService } from 'app/Services/reviews.service';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {

  patients:Patient[]=[];
  rewiews:Review[]=[];
  doctors:Doctor[]=[];
  constructor(
    private patientServices:PatientsService,
    private doctorServices:DoctorsService,
    private reviewService:ReviewsService,
  ) { }

  ngOnInit(): void {

  }
getAllReviews(){

  this.reviewService.getAllReviews().subscribe(review=>this.rewiews=review)
}


}
