import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookWithDoctorComponent } from './Component/book-with-doctor/book-with-doctor.component';
import { SearchResultsComponent } from './Component/search_doctors/main/search_results/search-results/search-results.component';
const routes: Routes = [
  { path: 'booking', component:BookWithDoctorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
 
 }

