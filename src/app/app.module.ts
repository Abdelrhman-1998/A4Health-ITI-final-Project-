import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ReactiveFormsModule} from '@angular/forms'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { NavBarComponent } from './Landing-page/nav-bar/nav-bar.component';
import { MainLandingPageComponent } from './Landing-page/main-landing-page/main-landing-page.component';
import { FooterComponent } from './Landing-page/footer/footer.component';
import { ServicesComponent } from './Landing-page/main-landing-page/services/services.component';
import { MeetDoctorsComponent } from './Landing-page/main-landing-page/meet-doctors/meet-doctors.component';
import { FeedbackComponent } from './Landing-page/main-landing-page/feedback/feedback.component';
import { BookWithDoctorComponent } from './bookWithDoctor/book-with-doctor/book-with-doctor.component';
import { ReviewComponent } from './Review/review/review.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    MainLandingPageComponent,
    FooterComponent,
    ServicesComponent,
    MeetDoctorsComponent,
    FeedbackComponent,
    BookWithDoctorComponent,   
    ReviewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
