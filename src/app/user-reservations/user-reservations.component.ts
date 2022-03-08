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

  }

  ngOnInit(): void {
    this._UserreservationsService.getReservations().subscribe((response)=>{
      this.homeData = response;
    });
  }
  delete(fname:any)
  {
    for(let i = 0 ; i<this.homeData.length ; i++)
    {
      if( this.homeData[i].name == fname)
      {
        this.homeData.splice( i,1);
      }
    }
    //console.log( this.homeData[0].Location);
    //this.homeData.splice( 1,1); 
  }

}
