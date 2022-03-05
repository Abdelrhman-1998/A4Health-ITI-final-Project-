import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ReactiveFormsModule} from '@angular/forms'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import{HttpClientModule}from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { NavBarComponent } from './Component/Landing-page/nav-bar/nav-bar.component';
import { MainLandingPageComponent } from './Component/Landing-page/main-landing-page/main-landing-page.component';
import { FooterComponent } from './Component/Landing-page/footer/footer.component';
import { ServicesComponent } from './Component/Landing-page/main-landing-page/services/services.component';
import { MeetDoctorsComponent } from './Component/Landing-page/main-landing-page/meet-doctors/meet-doctors.component';
import { FeedbackComponent } from './Component/Landing-page/main-landing-page/feedback/feedback.component';
import { BookWithDoctorComponent } from './Component/book-with-doctor/book-with-doctor.component';
import { ReviewComponent } from './Component/Review/review/review.component';

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
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
