import { Component, OnInit } from '@angular/core';
import { UserreservationsService } from '../userreservations.service';


@Component({
  selector: 'app-user-reservations',
  templateUrl: './user-reservations.component.html',
  styleUrls: ['./user-reservations.component.css']
})
export class UserReservationsComponent implements OnInit {
  homeData:any[]=[];
  constructor(private _UserreservationsService:UserreservationsService) { 
    _UserreservationsService.getReservations().subscribe((response)=>{
      this.homeData = response;
    });
  }

  ngOnInit(): void {
  }

}
