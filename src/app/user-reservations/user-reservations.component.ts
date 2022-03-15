import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UserreservationsService } from '../userreservations.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-user-reservations',
  templateUrl: './user-reservations.component.html',
  styleUrls: ['./user-reservations.component.css']
})
export class UserReservationsComponent implements OnInit {
  homeData:any[]=[];

  constructor(private _UserreservationsService:UserreservationsService ,private httpClient:HttpClient
    ) { 

  }
  countryCode!:any;
  sessionId!:any;
  routing_status!:boolean;
  
  payment(){ 
    // api
    console.log("tt");
      let url ="https://a4-health.herokuapp.com/api/patients/1/reservations/2/pay";
       return this.httpClient.get(url); // return parameters
  }
  checkPaymentsFields(){
    
  }
  ngOnInit(): void {
    let patient_id = localStorage.getItem("patient_id");
    let reservations:any;
    this._UserreservationsService.getReservations( patient_id).subscribe(res=>{
      let x:any =res;
      this.homeData=x;
        console.log(res);
    },err=>{
      console.log(err);
    })

    // return parameters from api
    this.payment().subscribe(res =>{
      let x:any =res;
      this.countryCode=x.countryCode;
      this.sessionId=x.sessionId;
      this.routing_status=true;
     
    },
      err=>{
        console.log(err);
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


