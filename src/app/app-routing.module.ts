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
import { SearchResultsComponent } from './search_doctors/main/search_results/search-results/search-results.component';
const routes: Routes = [

  {path:'admin/login',component:AdminLoginComponent},
  {path:'admin',component:AdminDashboardComponent,children:[
    {path:'addDoctor',component:AddDoctorComponent},
    {path:'doctor',component:DoctorsComponent},
    {path:'patient',component:PatientComponent},
    {path:'specialties',component:SpecialtiesComponent},
    {path:'addSpecialties',component:AddSpecialtiesComponent},
    {path:'specialty/edit/:id',component:AddSpecialtiesComponent} ,
    {path:'feadback',component:FeedbacksComponent},
 
  ]},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
 
 }

