import { HttpClient } from "@angular/common/http";
import { Component, Input, OnInit, Output } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Doctor } from "../../../app/Models/doctor";
import { Review } from "../../../app/Models/review";
import { DoctorsService } from "../../../app/Services/doctors.service";
import { DoctorService } from "src/app/Services/doctor.service";
import { ReviewsService } from "../../../app/Services/reviews.service";
import { OwlOptions } from 'ngx-owl-carousel-o';
import { GlobaltokenService } from "src/app/gt/globaltoken.service";
@Component({
  selector: "app-book-with-doctor",
  templateUrl: "./book-with-doctor.component.html",
  styleUrls: ["./book-with-doctor.component.css"],
})
export class BookWithDoctorComponent implements OnInit {
  show: boolean = false;
  showAllReviews: boolean = false;
  // cardDoctorId: number = 2;
  doctor_id:any;
  doctor_datadoctor!: Doctor;
  doctor_data:any;

  fname:any;
  lname:any;
  fees:any;
  image_url:any;
  title:any;
  specilaization:any;
  description:any;
  city:any;
  street:any;

  full_name:any;
  doctor_reviews:any;
  overAllRating!:Review[];
  totalRate:number=0
  stars:number[]=[];
  halfstar:boolean=false
  // rateNumber:number=0
  // reviewwithRateNumber!:Review
 
  constructor(
    private httpClient: HttpClient,
    private doctorService: DoctorsService,
    private reviewsService: ReviewsService,
    private activatedRoute: ActivatedRoute,
    private doctorData:DoctorService,
    private route:Router,
    private globalService:GlobaltokenService
  ) {}
 
  ngOnInit(): void {
    // this.getDoctorByID();
    // this.getOverAllRating();
    let doctor_id= this.activatedRoute.snapshot.params['id'];
    console.log(this.doctor_id);

   this.doctorData.getDoctorInfo(doctor_id).subscribe(res=>{
      this.doctor_data=res;
      let data:any = res;
      console.log(data);
      this.fname=data.fname;
      this.lname=data.lname;
      this.title=data.title;
      this.specilaization=data.specilaization;
      this.fees=data.fees;
      this.city=data.city;
      this.street=data.street;
      this.description=data.description;
      this.image_url=data.image;
      console.log(this.image_url);
      let fname=data.fname;
      let lname=data.lname;
      let fullname=fname+" "+lname;
      this.full_name=fullname;
      this.doctor_id=data.id;
    },err=>{
      console.log(err)
    })
    this.doctorData.getDoctorReviews(doctor_id).subscribe(res=>{
      this.doctor_reviews=res;
      console.log(res);
    },err=>{
        console.log(err);
    })

  
  }

  showMore() {
    this.show = !this.show;
  }
  showReviews() {
    this.showAllReviews = !this.showAllReviews;
  }
  counter(i: number) {
    return new Array(i);
  }
  navigateTosearchPage(){
      this.globalService.setDoctorFullName(this.full_name);
      console.log(this.full_name);
      this.route.navigate(['/Search']);
  }
  // getDoctorByID() {
  //   this.doctorService.getDoctorWithID(this.cardDoctorId).subscribe(
  //     (doctor) => {
  //       this.doctor = doctor;
  //     },
  //     (err) => console.log("HTTP Error", err),
  //     () => console.log("HTTP request completed.")
  //   );
  // }
  // getOverAllRating() {
  //   this.reviewsService.getReviewByDoctorID(this.cardDoctorId).subscribe(
  //     (review) => {
  //      let total=0
  //       review.forEach((revRate)=>{
  //         total += revRate.rate
  //         this.totalRate =total/ review.length;
          
          
  //       })
  //       if(total% review.length ===1){
  //           this.halfstar=true;            
  //           this.stars.length=(this.totalRate )
  //         }else{
  //           this.stars.length=(this.totalRate )
  //         }
  //       this.overAllRating=review;

  //     }
  //   );
  // }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 600,
    navText: ['&#8249', '&#8250;'],
    responsive: {
      0: {
        items: 1 
      },
      300: {
        items: 2
      },
      760: {
        items: 3
      },
      1000: {
        items: 4
      }
    },
    nav: true
  }
}
