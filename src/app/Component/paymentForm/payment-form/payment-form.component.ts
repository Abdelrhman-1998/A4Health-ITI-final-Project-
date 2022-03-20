import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Observable } from 'rxjs';
import { Router } from '@angular/router';


declare var myFatoorah: any;
import { GlobaltokenService } from 'src/app/gt/globaltoken.service';
@Component({
  selector: 'app-payment-form',
  templateUrl: './payment-form.component.html',
  styleUrls: ['./payment-form.component.css']
})
export class PaymentFormComponent implements OnInit {
  header:any =new HttpHeaders().set("Authorization",localStorage.getItem('Authorization')!);
  countryCode!:string;
  sessionId!:string;
  patient_id:any;
  reservation_id:any;
  observable!:Observable<any>;
  config:any=
{

    // countryCode:"KWT", // Here, add your Country Code.
    // sessionId:"74cc99f8-65a2-ec11-bafa-000d3aaca798", // Here you add the "SessionId" you receive from InitiateSession Endpoint.
    cardViewId:"card-element",
    // The following style is optional.
    style: {
      direction: "ltr",
      cardHeight: 130,
      input: {
        color: "black",
        fontSize: "13px",
        fontFamily: "sans-serif",
        inputHeight: "32px",
        inputMargin: "0px",
        borderColor: "c7c7c7",
        borderWidth: "1px",
        borderRadius: "8px",
        boxShadow: "",
        placeHolder: {
          holderName: "Name On Card",
          cardNumber: "Number",
          expiryDate: "MM / YY",
          securityCode: "CVV",
        }
      },
      label: {
        display: false,
        color: "black",
        fontSize: "13px",
        fontWeight: "normal",
        fontFamily: "sans-serif",
        text: {
          holderName: "Card Holder Name",
          cardNumber: "Card Number",
          expiryDate: "Expiry Date",
          securityCode: "Security Code",
        }
      },
      error: {
        borderColor: "red",
        borderRadius: "8px",
        boxShadow: "0px",
      },
     



    
  }

}

constructor(private route: ActivatedRoute,private httpClient:HttpClient,private router:Router,private payment:GlobaltokenService) { }

  ngOnInit(): void {
    this.patient_id=this.payment.theid;
    let countryCode = this.route.snapshot.params['countryCode'];
    let sessionId=this.route.snapshot.params['sessionId'];

    this.config.countryCode=countryCode;
    this.config.sessionId=sessionId;

    console.log(this.config);
    myFatoorah.init(this.config);

    console.log( countryCode,sessionId);
    console.log(myFatoorah);

    // check response of session url
  }

  submit1(){

    let header =this.header;
    let patient_id=this.patient_id;
    let reservation_id=this.payment.getReservation();
    let httpClient=this.httpClient;
    let observable:any;
    console.log("dds");
    console.log( myFatoorah);
    console.log(myFatoorah.submit());
    myFatoorah.submit()
    .then(function (response:any) {
      // console.log("dds");
      var sessionId = response.SessionId;
      console.log(reservation_id)   
      var url = "https://a4-health.herokuapp.com/api/patients/"+patient_id+"/reservations/"+reservation_id+"/pay/now/"+sessionId;
      console.log(url);
    // Here you need to pass session id to you backend here
   observable = httpClient.get(url,{'headers':header});
   console.log(observable);
    observable.subscribe((res:any)=>{
          console.log(res);
           window.location.href =res.url;
          
    },(err: any)=>{
          console.log(err);
    })
    
    var cardBrand = response.CardBrand;
    // window.location.href = url;
  
    })
    // In case of errors
    .catch(function (error:any) {
      observable="sffs"; // test
        console.log(error);
    });
    this.observable =observable;
  }
  
}