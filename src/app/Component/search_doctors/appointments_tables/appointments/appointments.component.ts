import { Component, OnInit } from '@angular/core';

import { OwlOptions } from 'ngx-owl-carousel-o';
import { Doctor } from 'src/app/Models/doctor';
import { DoctorService } from 'src/app/Services/doctor.service';
import { RatingStarsPipe } from 'src/app/Pipes/rating-stars.pipe';
import { NgModule } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AppModule } from 'src/app/app.module';
@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.css']
})
export class AppointmentsComponent implements OnInit {

  doctor_data!:Doctor[];
  constructor(private Doctor_service:DoctorService) { }
  appointemnts!:any;
  doctor_id:number=1;
  appointments:any=[
    {
      "Date": "2022-03-14",
      "Time": [
        "3:30 PM",
        "4:00 PM",
        "4:30 PM",
        "5:00 PM",
        "5:30 PM",
        "6:00 PM",
        "6:30 PM",
        "3:30 PM",
        "4:00 PM",
        "4:30 PM",
        "5:00 PM",
        "5:30 PM",
        "6:00 PM",
        "6:30 PM",
        "3:30 PM",
        "4:00 PM",
        "4:30 PM",
        "5:00 PM",
        "5:30 PM",
        "6:00 PM",
        "6:30 PM"
      ]}]
  appointment_previous_element:any;
  disableAllbuttons(x:any){
    if(this.appointment_previous_element){
      this.appointment_previous_element.disabled=true;
    }
      x.disabled=false;
      this.appointment_previous_element=x;
   }
   submitAppointment(x:any,y:any){
    x.value.date=y.value;
      console.log(x.value);
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
