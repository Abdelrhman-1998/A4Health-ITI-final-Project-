import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoctorAppiontmentComponent } from './Doctor/doctor-appiontment/doctor-appiontment.component';
import { DoctorDashboardComponent } from './Doctor/doctor-dashboard/doctor-dashboard.component';
import { DoctorEditProfileComponent } from './Doctor/doctor-edit-profile/doctor-edit-profile.component';
import { DoctorFeedbackComponent } from './Doctor/doctor-feedback/doctor-feedback.component';
import { DoctorProfileComponent } from './Doctor/doctor-profile/doctor-profile.component';
import { DoctorReservationsComponent } from './Doctor/doctor-reservations/doctor-reservations.component';
import { UserChangePasswordComponent } from './user-change-password/user-change-password.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UserManageProfileComponent } from './user-manage-profile/user-manage-profile.component';
import { UserReservationsComponent } from './user-reservations/user-reservations.component';

const routes: Routes = [
  {path:'userdashboard' , component:UserDashboardComponent , children:[
    {path:'reservations' , component:UserReservationsComponent},
    {path:'manageprofile' , component:UserManageProfileComponent},
    {path:'changepassword' , component:UserChangePasswordComponent},
  ]},
  {path:'doctordashboard' , component:DoctorDashboardComponent , children:[
    {path:'profile' , component:DoctorProfileComponent},
    {path:'editprofile' , component:DoctorEditProfileComponent},
    {path:'appointment' , component:DoctorAppiontmentComponent},
    {path:'dreservations' , component:DoctorReservationsComponent},
    {path:'feedback' , component:DoctorFeedbackComponent},
  ]},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
