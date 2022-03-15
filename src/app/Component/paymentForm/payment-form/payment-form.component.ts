import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
declare var myFatoorah: any;
@Component({
  selector: 'app-payment-form',
  templateUrl: './payment-form.component.html',
  styleUrls: ['./payment-form.component.css']
})
export class PaymentFormComponent implements OnInit {
  countryCode!:string;
  sessionId!:string;
  observable!:Observable<any>;
  config:any=
{

    countryCode:"KWT", // Here, add your Country Code.
    sessionId:"74cc99f8-65a2-ec11-bafa-000d3aaca798", // Here you add the "SessionId" you receive from InitiateSession Endpoint.
    cardViewId: "card-element",
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

constructor(private route: ActivatedRoute,private httpClient:HttpClient,private router:Router) { }

  ngOnInit(): void {

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

  submit(){
    let httpClient=this.httpClient;
    let observable:any;
    myFatoorah.submit()
    // On success
    .then(function (response:any) {
      var sessionId = response.SessionId;     
      var url = "https://a4-health.herokuapp.com/api/patients/1/reservations/2/pay/now/"+sessionId;
      console.log(url);
    // Here you need to pass session id to you backend here
   observable = httpClient.get(url);
  //  console.log(observable);
  //   observable.subscribe((res:any)=>{
  //         console.log(res);
  //          window.location.href =res.url;
          
  //   },(err: any)=>{
  //         console.log(err);
  //   })
    
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