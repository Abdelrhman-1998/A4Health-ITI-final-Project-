import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Doctor } from 'src/app/Models/doctor';
import { DoctorService } from 'src/app/Services/doctor.service';
import { RatingStarsPipe } from 'src/app/Pipes/rating-stars.pipe';
import { NgModule } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AppModule } from 'src/app/app.module';
import { ActivatedRoute } from "@angular/router";
import { GlobaltokenService } from 'src/app/gt/globaltoken.service';
import { MainpulateTimesPipe } from 'src/app/Pipes/mainpulate-times.pipe';
import { SortAppointmentsPipe } from 'src/app/Pipes/sort-appointments.pipe';
@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.css']
})
export class AppointmentsComponent implements OnInit {

  doctor_data!:Doctor[];
  constructor(private Doctor_service:DoctorService ,   private route: ActivatedRoute,private patient:GlobaltokenService) { }
  appointemnts!:any;
  doctor_id:number=1;
  
  sort_status:boolean=false;
  switch_status!:boolean;
  offers_status!:boolean;
  top_arrow!:boolean;//appointment
  submmitedForm!:{}
  appointment_id!:number;
  confirm_condition=this.patient.thetoken;
  appointment_previous_element!:any;

  printValues(x:any){
    console.log(x.value);
}

  
 

  disableAllbuttons(x:any){
    if(this.appointment_previous_element){
      this.appointment_previous_element.disabled=true;
    }
      x.disabled=false;
      this.appointment_previous_element=x;
   }

  checkScroll(x:any,y:any){
    if(x.scrollTop==0){
      y.style="display:none";
    }
    else{
     y.style="display:block";
    }
 
   }
  goToTop(x:any){
    x.scrollTop=0;
  }
  
  ngOnInit(): void {
    let doctor_id = this.route.snapshot.params['id'];
    console.log(doctor_id);
    this.Doctor_service.getDoctorInfo(doctor_id).subscribe(res=>{
      console.log(res);
      let appointments:any=res;
      this.appointemnts=appointments.appointment;
      console.log(this.appointemnts[0]);
      console.log(this.appointemnts);
      console.log()
    },err=>{
      console.log(err);
    })
  
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
  
  
    let patient_id:any= this.patient.theid;
    let appointment_id=this.appointment_id;
    console.log(appointment_id);
    let appointment_object={"appointment_id":appointment_id,"patient_time":patient_time,"patient_id":patient_id};
    console.log(appointment_object);
    this.Doctor_service.postAppointmetApi(patient_id,appointment_object).subscribe(res=>{
      console.log(appointment_object);
      console.log(res);
    },err=>{
      console.log(err);
    })
  }

  submitAppointment(x:any,y:any,z:any,appointment_id:number){

    // check authentication status
    if(this.confirm_condition){
      x.value.date=y.value;
      console.log(x.value);
      this.submmitedForm=x;
      // $("#Appointments").modal('hide');
      $("#confirm_appointment").modal('show');
      this.appointment_id=appointment_id;
     
    }
    else{
      // $("#Appointments").modal('hide');
    }
  }



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
