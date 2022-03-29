import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { LoginService } from 'src/app/Services/login-service.service';


@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  constructor(private router:Router,private login:LoginService) { }

  ngOnInit(): void {
    // this.router.navigate(['/admin/doctor'])
    this.login.checkToken();

  }
 checkToken(){

 }

}
