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
  delete(name:any)
  {
    console.log(name);
    for(let i = 0 ; i<this.homeData.length ; i++)
    {
      if( this.homeData[i].name == name)
      {
        this.homeData.splice( i,1);
      }
    }
    //console.log( this.homeData[0].Location);
    //this.homeData.splice( 1,1); 
  }

}
