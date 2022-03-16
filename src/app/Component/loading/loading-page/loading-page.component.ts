import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from "@angular/router";
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
@Component({
  selector: 'app-loading-page',
  templateUrl: './loading-page.component.html',
  styleUrls: ['./loading-page.component.css']
})
export class LoadingPageComponent implements OnInit {

  constructor(private route: ActivatedRoute,private httpClient:HttpClient,private router:Router) { }

  ngOnInit(): void {
    let url="https://a4-health.herokuapp.com/api/patients/1/reservations/2/pay/done"
    let confirm_payment = this.httpClient.get(url);
    confirm_payment.subscribe(res=>{
          console.log(res);
          this.router.navigate(['/userdashboard/reservations']);
    },err=>{
        console.log(err);

    })
  }

}
