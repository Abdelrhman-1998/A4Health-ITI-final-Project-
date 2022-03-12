import { Component, OnInit } from '@angular/core';
import { NavBarComponent } from '../../nav-bar/nav-bar.component';
import { FooterComponent } from '../../footer/footer.component';
import { MainLandingPageComponent } from '../../main-landing-page/main-landing-page.component';
@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
