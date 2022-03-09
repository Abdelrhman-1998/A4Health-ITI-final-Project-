import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDoctorComponent } from './Component/Admin/add-doctor/add-doctor.component';
import { AddSpecialtiesComponent } from './Component/Admin/add-specialties/add-specialties.component';
import { DoctorsComponent } from './Component/Admin/doctors/doctors.component';
import { PatientComponent } from './Component/Admin/patient/patient.component';
import { SpecialtiesComponent } from './Component/Admin/specialties/specialties.component';
import { SearchResultsComponent } from './search_doctors/main/search_results/search-results/search-results.component';
const routes: Routes = [
  {path:'admin',redirectTo:'admin/addDoctor'},
  {path:'admin/addDoctor',component:AddDoctorComponent},
  {path:'admin/doctor',component:DoctorsComponent},
  {path:'admin/patient',component:PatientComponent},
  {path:'admin/specialties',component:SpecialtiesComponent},
  {path:'admin/addSpecialties',component:AddSpecialtiesComponent},
  {path:'admin/specialty/edit/:id',component:AddSpecialtiesComponent} ,
  // {path:'admin/feadback',component:FeedbacksComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
 
 }

