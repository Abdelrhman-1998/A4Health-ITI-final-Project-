import { Component, OnInit } from '@angular/core';
import { NavBarComponent } from 'src/app/Component/Landing-page/nav-bar/nav-bar.component';
import { BookWithDoctorComponent } from '../../book-with-doctor.component';
import { FooterComponent } from 'src/app/Component/Landing-page/footer/footer.component';
@Component({
  selector: 'app-booking-page',
  templateUrl: './booking-page.component.html',
  styleUrls: ['./booking-page.component.css']
})
export class BookingPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
