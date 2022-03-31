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
import { SortAppointmentsPipe } from "src/app/Pipes/sort-appointments.pipe";
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
  appointment_length:any=true;
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
  confirmDate:any;
  choosenDate:any;
  choosenBookingOption:any;

  app_previous_li:any;
  app_time:any;
  disableAllOptions(x:any,y:any){
    // this. li_check_click=true;
    if(this.app_previous_li){
      this.app_previous_li.style="background-color:transparent;color: #0075ff ;font-size:14px;"      
    }
    this.app_previous_li=x;
    this.app_previous_li.style="background-color: #0075ff;color: white;font-size:14px;";
    this.app_time=y;
    console.log(y);
 }
  submitAppointmentModal(x:any,y:any,z:any,appointment_id:number){
    console.log(this.confirm_condition);
    if(this.confirm_condition){
      x.value.date=y.value;
      x.value.appointment=this.app_time;
      console.log(x.value);
      this.choosenBookingOption=x.value.appointment;
      this.choosenDate=x.value.date;
      console.log(x.value.appointment);
      console.log(x.value);
      this.submmitedForm=x;
      $("#Appointment_booking").modal('hide');
      $("#confirm_appointment2").modal('show');
      this.appointment_id=appointment_id;
     
    }
    else{
      $("#Appointment_booking").modal('hide');
    }
  }
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
    this.globalService.itemValue.subscribe(res=>{
      console.log(res);
 
      if(res =="null" || res=="" || res==null){
          this.confirm_condition=false;
      }
      else{
          this.confirm_condition=true;
      }
     
    },
      err=>{
        console.log(err);
     
         
      });

    let doctor_id= this.activatedRoute.snapshot.params['id'];
    console.log(this.doctor_id);
    this.doctor_id=doctor_id;
    this.doctorData.getDoctorInfo(doctor_id).subscribe(res=>{
      let appointments:any= res;
      this.appointment=appointments.appointment;
      this.appointment_length= this.appointment.length;

      
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
      this.appointment= data.appointment;
      this.specilaization=data.specialization;
      this.fees=data.fees;
      this.city=data.city;
      this.street=data.street;
      this.description=data.description;
      this.image_url=data.img_name;
      console.log(this.image_url);
      const pipe1= new MainpulateTimesPipe ();
      const pipe2= new SortAppointmentsPipe();
      this.appointment= pipe1.transform(this.appointment);
      this.appointment=pipe2.transform(this.appointment);
      console.log(this.appointment);
      // this.appointment=pipe2.transform(this.appointment);
      // this.doctor_id=data.id;
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
  // navigateTosearchPage(){
  //     this.globalService.setDoctorFullName(this.full_name);
  //     console.log(this.full_name);
  //     this.route.navigate(['/Search',this.doctor_id]);
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
  this.choosenBookingOption=x.value.appointment_modal;
  this.choosenDate=x.value.date;
  console.log(x.value.appointment_modal);
  console.log(x.value);
  this.submmitedForm=x;
  $("#Appointment_booking").modal('hide');
  $("#confirm_appointment2").modal('show');
  this.appointment_id=appointment_id;
 
}
else{
  $("#Appointment_booking").modal('hide');
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

  naivgateToReservation(x:any){
    console.log(x.value);
    let time_array = x.value.appointment.split(" ");
    let time_prefix = time_array[1];
    let time=time_array[0].split(":");
    let patient_time;
    if(time_prefix.trim()=="PM"){
          let value= +time[0]+12;
          patient_time=value+":"+time[1];
    }
    else{
      patient_time=time[0]+":"+time[1]
    }
  
  
    let patient_id:any;
    this.globalService.idValue.subscribe(res=>{
      console.log(res);
      patient_id=res;
    },err=>{
      console.log(err);
    })
    let appointment_id=this.appointment_id;
    console.log(appointment_id);
    let appointment_object={"appointment_id":appointment_id,"patient_time":patient_time,"patient_id":patient_id};
    console.log(appointment_object);
  
    console.log(this.confirm_condition);
  
    this.Doctor_service.postAppointmetApi(patient_id,appointment_object).subscribe(res=>{
      console.log(appointment_object);
      console.log(res);
      this.confirmOption=this.choosenBookingOption;
      this.confirmDate=this.choosenDate;
      console.log(this.confirmOption);
    },err=>{
      console.log(err);
    })
  }
  

}
