import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminNotificationService } from 'src/app/Services/admin-notification.service';
import { LoginService } from 'src/app/Services/login-service.service';
@Component({
  selector: 'app-admin-navbar',
  templateUrl: './admin-navbar.component.html',
  styleUrls: ['./admin-navbar.component.css']
})
export class AdminNavbarComponent implements OnInit {
  isSuccessful:boolean=false
  noti:any
  constructor(private logOutservices:LoginService,private notificationServices:AdminNotificationService, private router:Router) { }

  ngOnInit(): void {
    this.getNotification()
  }

  logOut(){

    if(this.isSuccessful!=this.logOutservices.isUserlogged){
      this.router.navigate(['/login']);
    }
    this.logOutservices.logout().subscribe(
    )

  }
  getNotification(){
    this.notificationServices.getNotifications().subscribe(
      (res)=>{
        this.noti=res        
        // console.log(this.noti[0].data);
        
      }
    )
  }
  toggle() {
    "use strict"; // Start of use strict
    $("body").toggleClass("sidebar-toggled");
    $(".sidebar").toggleClass("toggled");
    if ($(".sidebar").hasClass("toggled")) {
      $('.sidebar .collapse').collapse('hide');
    };
    // Toggle the side navigation
  
  };
}
