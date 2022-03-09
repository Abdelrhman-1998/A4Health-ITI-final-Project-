import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDoctorComponent } from './Component/Admin/add-doctor/add-doctor.component';
import { DoctorsComponent } from './Component/Admin/doctors/doctors.component';
import { PatientComponent } from './Component/Admin/patient/patient.component';
import { SearchResultsComponent } from './search_doctors/main/search_results/search-results/search-results.component';
const routes: Routes = [
  {path:'admin',redirectTo:'admin/addDoctor'},
  {path:'admin/addDoctor',component:AddDoctorComponent},
  {path:'admin/doctor',component:DoctorsComponent},
  {path:'admin/patient',component:PatientComponent},
  // {path:'admin/specialties',component:SpecialtiesComponent},
  // {path:'admin/addSpecialties',component:AddSpecialtiesComponent},
  // {path:'admin/feadback',component:FeedbacksComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
 
 }

