import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/Services/login-service.service';
@Component({
  selector: 'app-admin-navbar',
  templateUrl: './admin-navbar.component.html',
  styleUrls: ['./admin-navbar.component.css']
})
export class AdminNavbarComponent implements OnInit {
  isSuccessful:boolean=false
  constructor(private logOutservices:LoginService, private router:Router) { }

  ngOnInit(): void {
  }

  logOut(){
    this.logOutservices.logout()
    console.log("logout");
    
    if(this.isSuccessful!=this.logOutservices.isUserlogged){
      this.router.navigate(['admin/login']);
  
    }
    this.router.navigate(['/admin/login'])

  }
}
