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
    DoctorFeedbackComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
