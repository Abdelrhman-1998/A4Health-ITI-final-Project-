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
import { MainpulateTimesPipe } from 'src/app/Pipes/mainpulate-times.pipe';
@Component({
  selector: "app-book-with-doctor",
  templateUrl: "./book-with-doctor.component.html",
  styleUrls: ["./book-with-doctor.component.css"],
})
export class BookWithDoctorComponent implements OnInit {
  appointment:any;
  show: boolean = false;
  showAllReviews: boolean = false;
  // cardDoctorId: number = 2;
  doctor_id:any;
  doctor_datadoctor!: Doctor;
  doctor_data:any;
  confirm_condition!:boolean;
  fname:any="";
  lname:any='';
  fees:any="";
  image_url:any="";
  title:any="";
  specilaization:any="";
  description:any="";
  city:any="";
  street:any="";
  offers:any;

  full_name:any;
  doctor_reviews:any;
  overAllRating!:Review[];
  totalRate:number=0
  stars:number[]=[];
  halfstar:boolean=false;
  submmitedForm!:{}
  appointment_id!:number;
  appointment_previous_element!:any;
  confirmOption:any;
  choosenBookingOption:any;
  // rateNumber:number=0
  // reviewwithRateNumber!:Review
 
  constructor(
    private httpClient: HttpClient,
    private doctorService: DoctorsService,
    private reviewsService: ReviewsService,
    private activatedRoute: ActivatedRoute,
    private doctorData:DoctorService,
    private route:Router,
    private globalService:GlobaltokenService,
    private Doctor_service:DoctorService
  ) {}
 
  ngOnInit(): void {
    // this.getDoctorByID();
    // this.getOverAllRating();
    let doctor_id= this.activatedRoute.snapshot.params['id'];
    console.log(this.doctor_id);
    this.doctor_id=doctor_id;
    this.doctorData.getDoctorInfo(doctor_id).subscribe(res=>{
      let appointments:any= res;
      this.appointment=appointments.appointment;
      
    },err=>{

    })
   this.doctorData.getDoctorInfo(doctor_id).subscribe(res=>{
      this.doctor_data=res;
      let data:any = res;
      console.log(data);
      this.fname=data.fname;
      this.lname=data.lname;
      this.title=data.title;
      this.offers=data.offers;
      this.specilaization=data.specialization;
      this.fees=data.fees;
      this.city=data.city;
      this.street=data.street;
      this.description=data.description;
      this.image_url=data.img_name;
      console.log(this.image_url);

      this.doctor_id=data.id;
    },err=>{
      console.log(err)
    });

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
      this.route.navigate(['/Search',this.doctor_id]);
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

  // customOptions: OwlOptions = {
  //   loop: true,
  //   mouseDrag: true,
  //   touchDrag: true,
  //   pullDrag: false,
  //   dots: false,
  //   navSpeed: 600,
  //   navText: ['&#8249', '&#8250;'],
  //   responsive: {
  //     0: {
  //       items: 1 
  //     },
  //     300: {
  //       items: 2
  //     },
  //     760: {
  //       items: 3
  //     },
  //     1000: {
  //       items: 4
  //     }
  //   },
  //   nav: true
  // }

//   printValues(x:any){
//     console.log(x.value);
// }
goToTop(x:any){
  x.scrollTop=0;
}
//------------------
submitAppointment(x:any,y:any,z:any,appointment_id:number){
console.log(this.confirm_condition);
// check authentication status
if(this.confirm_condition){
  x.value.date=y.value;
  this.choosenBookingOption=x.value.appointment;
  console.log(x.value.appointment);
  console.log(x.value);
  this.submmitedForm=x;
  $("#Appointments").modal('hide');
  $("#confirm_appointment").modal('show');
  this.appointment_id=appointment_id;
 
}
else{
  $("#Appointments").modal('hide');
}
}
checkScroll(x:any,y:any){
if(x.scrollTop==0){
  y.style="display:none";
}
else{
 y.style="display:block";
}

}
disableAllbuttons(x:any){
if(this.appointment_previous_element){
  this.appointment_previous_element.disabled=true;
}
  x.disabled=false;
  this.appointment_previous_element=x;
}
//-------
  
 

  // disableAllbuttons(x:any){
  //   if(this.appointment_previous_element){
  //     this.appointment_previous_element.disabled=true;
  //   }
  //     x.disabled=false;
  //     this.appointment_previous_element=x;
  //  }

  // checkScroll(x:any,y:any){
  //   if(x.scrollTop==0){
  //     y.style="display:none";
  //   }
  //   else{
  //    y.style="display:block";
  //   }
 
  //  }
  // goToTop(x:any){
  //   x.scrollTop=0;
  // }

  // submitAppointment(x:any,y:any,z:any,appointment_id:number){
  //   console.log(this.confirm_condition);
  //   // check authentication status
  //   if(this.confirm_condition){
  //     x.value.date=y.value;
  //     console.log(x.value);
  //     this.submmitedForm=x;
  //     $("#Appointments").modal('hide');
  //     $("#confirm_appointment").modal('show');
  //     this.appointment_id=appointment_id;
     
  //   }
  //   else{
  //     $("#Appointments").modal('hide');
  //   }
  // }

  // naivgateToReservation(x:any){
  //   console.log(x.value);
  //   let time_array = x.value.appointment.split(" ");
  //   let time_prefix = time_array[1];
  //   let time=time_array[0].split(":");
  //   let patient_time;
  //   if(time_prefix.trim()=="PM"){
  //         let value= +time[0]+12;
  //         patient_time=value+":"+time[1];
  //   }
  //   else{
  //     patient_time=time[0]+":"+time[1]
  //   }
  
  
  //   let patient_id:any;
  //   this.globalService.idValue.subscribe(res=>{
  //     console.log(res);
  //     patient_id=res;
  //   },err=>{
  //     console.log(err);
  //   })
  //   let appointment_id=this.appointment_id;
  //   console.log(appointment_id);
  //   let appointment_object={"appointment_id":appointment_id,"patient_time":patient_time,"patient_id":patient_id};
  //   console.log(appointment_object);
  
  //   console.log(this.confirm_condition);
  
  //   this.Doctor_service.postAppointmetApi(patient_id,appointment_object).subscribe(res=>{
  //     console.log(appointment_object);
  //     console.log(res);
  //   },err=>{
  //     console.log(err);
  //   })
  // }
}
