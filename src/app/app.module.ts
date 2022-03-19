import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserReservationsComponent } from './user-reservations/user-reservations.component';
import { UserManageProfileComponent } from './user-manage-profile/user-manage-profile.component';
import { UserChangePasswordComponent } from './user-change-password/user-change-password.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import {HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { DoctorDashboardComponent } from './Doctor/doctor-dashboard/doctor-dashboard.component';
import { DoctorProfileComponent } from './Doctor/doctor-profile/doctor-profile.component';
import { DoctorEditProfileComponent } from './Doctor/doctor-edit-profile/doctor-edit-profile.component';
import { DoctorAppiontmentComponent } from './Doctor/doctor-appiontment/doctor-appiontment.component';
import { DoctorReservationsComponent } from './Doctor/doctor-reservations/doctor-reservations.component';
import { DoctorFeedbackComponent } from './Doctor/doctor-feedback/doctor-feedback.component';
import { FormsModule }   from '@angular/forms';
import { DotorSearchFieldComponent } from '././Component/search_doctors/main/dotor-search-field/dotor-search-field.component';
import { SearchResultsComponent } from '././Component/search_doctors/main/search_results/search-results/search-results.component';

import {NgxPaginationModule} from 'ngx-pagination';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';


import { RouterModule } from '@angular/router';

import { RatingStarsPipe } from './Pipes/rating-stars.pipe';


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
import { AppointmentPipe } from "./Pipes/appointment-pipe.pipe";
import { SortAppointmentsPipe } from './Pipes/sort-appointments.pipe';
import { SearchPageComponent } from './Component/search_doctors/main/search_page/search-page/search-page.component';
import { routes } from './app-routing.module';
import { routerOptions } from './app-routing.module';
import { AppointmentsComponent } from './Component/search_doctors/appointments_tables/appointments/appointments.component';
import { ConfirmAppointmentComponent } from './Component/search_doctors/confirmAppointment/confirm-appointment/confirm-appointment.component';
import { LandingPageComponent } from './Component/Landing-page/landing_page/landing-page/landing-page.component';
import { BookingPageComponent } from './Component/book-with-doctor/booking_page/booking-page/booking-page.component';
import { UsersignupComponent } from './usersignup/usersignup.component';
import { AdminLoginComponent } from './Component/Admin/admin-login/admin-login.component';
import { SignInComponent } from './Component/sign-in/sign-in.component';
import * as bootstrap from 'bootstrap';
import { UserFeadbackComponent } from './user-feadback/user-feadback.component';
import { NotFoundComponent } from './not-found/not-found.component';

import { ChangePasswordComponent } from './Component/Admin/change-password/change-password.component';


import { DoctorpasswordComponent } from './Doctor/doctorpassword/doctorpassword.component';
import { DoctorOffersComponent } from './Doctor/doctor-offers/doctor-offers.component';
import { MainpulateTimesPipe } from './Pipes/mainpulate-times.pipe';
import { FilterWithIdPipe } from './filter-with-id.pipe';
@NgModule({
  declarations: [
    AppComponent,
    UserReservationsComponent,
    UserManageProfileComponent,
    UserChangePasswordComponent,
    UserDashboardComponent,
    DoctorDashboardComponent,
    DoctorProfileComponent,
    DoctorEditProfileComponent,
    DoctorAppiontmentComponent,
    DoctorReservationsComponent,
    DoctorFeedbackComponent,
    NavBarComponent,
    MainLandingPageComponent,
    FooterComponent,
    ServicesComponent,
    DotorSearchFieldComponent,
    SearchResultsComponent,
    RatingStarsPipe,
    MainLandingPageComponent,
    MeetDoctorsComponent,
    FeedbackComponent,
    BookWithDoctorComponent,   
    ReviewComponent, AppointmentPipe, SortAppointmentsPipe,
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
     SearchPageComponent,
     AppointmentsComponent,
     ConfirmAppointmentComponent,
     LandingPageComponent,
     BookingPageComponent,
     UsersignupComponent,
     AdminLoginComponent,
     SignInComponent,
     UserFeadbackComponent,
     NotFoundComponent,
    ChangePasswordComponent,
     DoctorpasswordComponent,
     DoctorOffersComponent,
     MainpulateTimesPipe,
     FilterWithIdPipe

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    BrowserAnimationsModule,
    CarouselModule,
    FormsModule,
    BrowserAnimationsModule,RouterModule.forRoot(routes, routerOptions)
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
