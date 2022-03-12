import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';

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
import { BookWithDoctorComponent } from './Component/book-with-doctor/book-with-doctor.component';
import { AddDoctorComponent } from './Component/Admin/add-doctor/add-doctor.component';
import { AddSpecialtiesComponent } from './Component/Admin/add-specialties/add-specialties.component';
import { DoctorsComponent } from './Component/Admin/doctors/doctors.component';
import { FeedbacksComponent } from './Component/Admin/feedbacks/feedbacks.component';
import { PatientComponent } from './Component/Admin/patient/patient.component';
import { SpecialtiesComponent } from './Component/Admin/specialties/specialties.component';
import { SearchResultsComponent } from './Component/search_doctors/main/search_results/search-results/search-results.component';
import { MainLandingPageComponent } from './Component/Landing-page/main-landing-page/main-landing-page.component';
import { SearchPageComponent } from './Component/search_doctors/main/search_page/search-page/search-page.component';
import { LandingPageComponent } from './Component/Landing-page/landing_page/landing-page/landing-page.component';
import { BookingPageComponent } from './Component/book-with-doctor/booking_page/booking-page/booking-page.component';
import { UsersignupComponent } from './usersignup/usersignup.component';
import { AdminDashboardComponent } from './Component/Admin/admin-dashboard/admin-dashboard.component';
import { AdminLoginComponent } from './Component/Admin/admin-login/admin-login.component';
import { AuthGuard } from './Gaurds/auth.guard';
import { ReviewComponent } from './Component/Review/review/review.component';
import { UsergGuard } from './userguard/userg.guard';
import { SignInComponent } from './Component/sign-in/sign-in.component';
export const routes: Routes = [

  {path:'', component: MainLandingPageComponent},
  {path: 'Home', component: MainLandingPageComponent},
  {path: 'AboutUs', redirectTo: '/Home#aboutUs'},
  {path: 'Service', redirectTo: '/Home#service'},
  {path: 'booking/:id', component:BookWithDoctorComponent},
  {path: 'booking/:id/reviews/:id', component:ReviewComponent},
  {path: 'Search', component:SearchPageComponent},


  {path:'userdashboard' ,canActivate:[UsergGuard], component:UserDashboardComponent , children:[
    {path:'reservations' , component:UserReservationsComponent},
    {path:'manageprofile' , component:UserManageProfileComponent},
    {path:'changepassword' , component:UserChangePasswordComponent},
       ]},
       {path:'signup',component:UsersignupComponent},
       {path:'signin',component:SignInComponent},


  {path:'doctordashboard',canActivate:[UsergGuard]  ,component:DoctorDashboardComponent , children:[
    {path:'profile' , component:DoctorProfileComponent},
    {path:'editprofile' , component:DoctorEditProfileComponent},
    {path:'appointment' , component:DoctorAppiontmentComponent},
    {path:'dreservations' , component:DoctorReservationsComponent},
    {path:'feedback' , component:DoctorFeedbackComponent},
  ]},
  //   {path:'admin',redirectTo:'admin/addDoctor'},
  // {path:'admin/addDoctor',component:AddDoctorComponent},
  // {path:'admin/doctor',component:DoctorsComponent},
  // {path:'admin/patient',component:PatientComponent},
  // {path:'admin/specialties',component:SpecialtiesComponent},
  // {path:'admin/addSpecialties',component:AddSpecialtiesComponent},
  // {path:'admin/specialty/edit/:id',component:AddSpecialtiesComponent} ,
  // {path:'admin/feadback',component:FeedbacksComponent},
 
    {path:'admin',component:AdminDashboardComponent,children:[
    {path:'login',component:AdminLoginComponent},
    {path:'addDoctor',component:AddDoctorComponent,canActivate:[AuthGuard]},
    {path:'doctor',component:DoctorsComponent,canActivate:[AuthGuard]},
    {path:'patient',component:PatientComponent,canActivate:[AuthGuard]},
    {path:'specialties',component:SpecialtiesComponent,canActivate:[AuthGuard]},
    {path:'addSpecialties',component:AddSpecialtiesComponent,canActivate:[AuthGuard]},
    {path:'specialty/edit/:id',component:AddSpecialtiesComponent,canActivate:[AuthGuard]} ,
    {path:'feadback',component:FeedbacksComponent,canActivate:[AuthGuard]},
   
  ]},
]

export const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
  scrollOffset: [0, 0],
};


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

