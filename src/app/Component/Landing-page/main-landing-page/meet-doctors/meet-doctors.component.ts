import { Component, OnInit } from '@angular/core';
import { Doctor } from '../../../../Models/doctor';
import { DoctorsService } from 'src/app/Services/doctors.service';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-meet-doctors',
  templateUrl: './meet-doctors.component.html',
  styleUrls: ['./meet-doctors.component.css']
})
export class MeetDoctorsComponent implements OnInit {
 doctors:Doctor[]=[]
  constructor(
    private doctorServices:DoctorsService
  ) { }

  ngOnInit(): void {
    this.getAllDoctors()
  }

getAllDoctors(){
  this.doctorServices.getAllDoctors().subscribe(doctor=>this.doctors=doctor)
}



  // Owl Plugin
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
        items: 1
      },
      600: {
        items: 2
      },
      1000: {
        items: 4
      }
    },
    nav: true
  }
}
