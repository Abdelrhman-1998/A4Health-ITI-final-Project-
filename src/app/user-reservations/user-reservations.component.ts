import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UserreservationsService } from '../userreservations.service';
import { GlobaltokenService } from '../gt/globaltoken.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DoctorsService } from '../Services/doctors.service';
import { DoctorserviceService } from '../doctorservice/doctorservice.service';

@Component({
  selector: 'app-user-reservations',
  templateUrl: './user-reservations.component.html',
  styleUrls: ['./user-reservations.component.css']
})
export class UserReservationsComponent implements OnInit {
  homeData:any[]=[];

  header:any =new HttpHeaders().set("Authorization",localStorage.getItem('Authorization')!);
  constructor(private _UserreservationsService:UserreservationsService ,private httpClient:HttpClient,private patient:GlobaltokenService,private doctor_service:DoctorserviceService
    ) { 

  }
  countryCode!:any;
  sessionId!:any;
  routing_status!:boolean;
  patient_id:any;
  reservation_id:any;
  reservation_status:any;
  payment(reservation_id:any){ 
    // api
    console.log("tt");
    this.reservation_id=reservation_id;
    this.patient.setReservation(reservation_id);
  
    // let patient_id=this.patient.theid;
      let url ="https://a4-health.herokuapp.com/api/patients/"+this.patient_id+"/reservations/"+this.reservation_id+"/pay";
      console.log(url);
       return this.httpClient.get(url,{'headers':this.header}); // return parameters
  }
  checkPaymentsFields(){
    
  }
  deleteReservation(reservation_id:any){
      this._UserreservationsService.deleteReservation(this.patient_id,reservation_id).subscribe(res=>{
        console.log(res);
        window.location.reload();
      },err=>{
        console.log(err);
      })
  }

  ngOnInit(): void {
    let patient_id=this.patient.theid;
    this.patient_id=patient_id;
    let reservations:any;
    this._UserreservationsService.getReservations( patient_id).subscribe(res=>{
      let x:any =res;
      this.homeData=x;
        console.log(res);
        // let response:any=res;
        // let status= response[0].status;
        // this.reservation_status=status;
  
    
     
    },err=>{
      console.log(err);
    })

    // return parameters from api
    this.payment(this.reservation_id).subscribe(res =>{
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


