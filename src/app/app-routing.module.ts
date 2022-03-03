import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserChangePasswordComponent } from './user-change-password/user-change-password.component';
import { UserManageProfileComponent } from './user-manage-profile/user-manage-profile.component';
import { UserReservationsComponent } from './user-reservations/user-reservations.component';

const routes: Routes = [
  {path:'reservations' , component:UserReservationsComponent},
  {path:'manageprofile' , component:UserManageProfileComponent},
  {path:'changepassword' , component:UserChangePasswordComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
