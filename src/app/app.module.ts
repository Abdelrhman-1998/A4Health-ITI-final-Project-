import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DotorSearchFieldComponent } from './search_doctors/main/dotor-search-field/dotor-search-field.component';
import { SearchResultsComponent } from './search_doctors/main/search_results/search-results/search-results.component';
import { OptionComponent } from './search_doctors/main/dotor-search-field/option/option.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { FormsModule } from '@angular/forms';
import{HttpClientModule} from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { RatingStarsPipe } from './rating-stars.pipe';
import {ReactiveFormsModule} from '@angular/forms';
import { NavBarComponent } from './Component/Landing-page/nav-bar/nav-bar.component';
import { MainLandingPageComponent } from './Component/Landing-page/main-landing-page/main-landing-page.component';
import { FooterComponent } from './Component/Landing-page/footer/footer.component';
import { ServicesComponent } from './Component/Landing-page/main-landing-page/services/services.component';
import {MeetDoctorsComponent } from './Component/Landing-page/main-landing-page/meet-doctors/meet-doctors.component';
import { FeedbackComponent } from './Component/Landing-page/main-landing-page/feedback/feedback.component';
import { BookWithDoctorComponent } from './Component/book-with-doctor/book-with-doctor.component';
import { ReviewComponent } from './Component/Review/review/review.component';
import { AdminSideNavComponent } from './Component/Admin/admin-side-nav/admin-side-nav.component';
import { AddDoctorComponent } from './Component/Admin/add-doctor/add-doctor.component';
import { AdminNavbarComponent } from './Component/Admin/admin-navbar/admin-navbar.component';
import { AdminDashboardComponent } from './Component/Admin/admin-dashboard/admin-dashboard.component';
import { DoctorsComponent } from './Component/Admin/doctors/doctors.component';
import { PatientComponent } from './Component/Admin/patient/patient.component';
import { SpecialtiesComponent } from './Component/Admin/specialties/specialties.component';
import { AddSpecialtiesComponent } from './Component/Admin/add-specialties/add-specialties.component';
import { FeedbacksComponent } from './Component/Admin/feedbacks/feedbacks.component';
import { FilterPipe } from './filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    MainLandingPageComponent,
    FooterComponent,
    ServicesComponent,
    DotorSearchFieldComponent,
    SearchResultsComponent,
    OptionComponent,
    RatingStarsPipe,
    MeetDoctorsComponent,
    FeedbackComponent,
    BookWithDoctorComponent,   
    ReviewComponent,
     AdminSideNavComponent,
     AddDoctorComponent,
     AdminNavbarComponent,
     AdminDashboardComponent,
     DoctorsComponent,
     PatientComponent,
     SpecialtiesComponent,
     AddSpecialtiesComponent,
     FeedbacksComponent,
     FilterPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPaginationModule,
    BrowserAnimationsModule,
    CarouselModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
