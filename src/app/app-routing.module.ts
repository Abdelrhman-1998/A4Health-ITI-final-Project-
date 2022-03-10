import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDoctorComponent } from './Component/Admin/add-doctor/add-doctor.component';
import { AddSpecialtiesComponent } from './Component/Admin/add-specialties/add-specialties.component';
import { AdminDashboardComponent } from './Component/Admin/admin-dashboard/admin-dashboard.component';
import { AdminLoginComponent } from './Component/Admin/admin-login/admin-login.component';
import { DoctorsComponent } from './Component/Admin/doctors/doctors.component';
import { FeedbacksComponent } from './Component/Admin/feedbacks/feedbacks.component';
import { PatientComponent } from './Component/Admin/patient/patient.component';
import { SpecialtiesComponent } from './Component/Admin/specialties/specialties.component';
import { AuthGuard } from './Gaurds/auth.guard';
import { SearchResultsComponent } from './search_doctors/main/search_results/search-results/search-results.component';
const routes: Routes = [

    {path:'admin',component:AdminDashboardComponent,children:[
    {path:'login',component:AdminLoginComponent},
    {path:'admin',component:AdminLoginComponent},
    {path:'addDoctor',component:AddDoctorComponent,canActivate:[AuthGuard]},
    {path:'doctor',component:DoctorsComponent,canActivate:[AuthGuard]},
    {path:'patient',component:PatientComponent,canActivate:[AuthGuard]},
    {path:'specialties',component:SpecialtiesComponent,canActivate:[AuthGuard]},
    {path:'addSpecialties',component:AddSpecialtiesComponent,canActivate:[AuthGuard]},
    {path:'specialty/edit/:id',component:AddSpecialtiesComponent,canActivate:[AuthGuard]} ,
    {path:'feadback',component:FeedbacksComponent,canActivate:[AuthGuard]},
 
  ]},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
 
 }

