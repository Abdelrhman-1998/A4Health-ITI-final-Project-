import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DoctorserviceService } from 'src/app/doctorservice/doctorservice.service';
import { DoctorService } from 'src/app/Services/doctor.service';

@Component({
  selector: 'app-doctor-offers',
  templateUrl: './doctor-offers.component.html',
  styleUrls: ['./doctor-offers.component.css']
})
export class DoctorOffersComponent implements OnInit  {

  Offers:any[]=[];
  doctor_offers!:any
  index!: number;

  edited!: any;
  deleted!: any;


  constructor(private _Doctorservic:DoctorserviceService) { }

  addOfferForm:FormGroup = new FormGroup({
    name:new FormControl(null , [Validators.required] ),
    discount:new FormControl(null, [Validators.required  ,Validators.max(100) , Validators.min(0)]),
    doctor_id:new FormControl(localStorage.getItem("id"), [Validators.required]),
  }); 
  editOfferForm:FormGroup = new FormGroup({
    name:new FormControl(null , [Validators.required] ),
    discount:new FormControl(null, [Validators.required ,Validators.max(100) , Validators.min(0)]),
    doctor_id:new FormControl(localStorage.getItem("id")),
  }); 
  ngOnInit(): void {
    this. _Doctorservic.getOffers().subscribe((response)=>{
      this.doctor_offers = response;
      console.log(response);
    });
  }
  /*submitDate(form:any)
  {
    console.log(form);

    /*if(form.fName && form.lName && form.Gender && form.Phones && form.City)
    {
      console.log(form);
    }
    else
    {
      console.log(form.Phones);
    }
  }*/

  addOoffer(offer:any)
  {
    console.log(offer);
    //this.doctorAppiontmets.push(appiontment);
    this._Doctorservic.addOffer(offer).subscribe((response)=>{
      //this.doctorAppiontmets = response;
      //console.log(response);
      this.ngOnInit();
    });

  }
  getIndexOfferToDelete(offer:any)
  {
    this.index= offer.id;
    this.deleted= null;
    console.log(this.index);
  }
  deleteOffer()
  {
          //console.log(offer.id);

    //deleteAppiontment
    //this.doctorAppiontmets.splice(this.doctorAppiontmets.indexOf(appiontment),1);
    this._Doctorservic.deleteOffer(this.index).subscribe((response)=>{
      //this.doctorAppiontmets = response;
      //console.log(response);
      if(response.response == 'deleted')
      {
        this.deleted = response.response;
      }
      this.ngOnInit();
    });
  }
  getIndexOffer(offer:any)
  {
  // console.log(this.doctorAppiontmets.indexOf(appiontment));
  // this.index= this.doctorAppiontmets.indexOf(appiontment);
     this.index= offer.id;
     this.edited= null;

     console.log(this.index);

   this.editOfferForm = new FormGroup ({
    name:new FormControl( offer.name ),
  discount:new FormControl(offer.discount),
  doctor_id:new FormControl(localStorage.getItem("id"))
  })
   //console.log( this.index);
  }
  editOfferr(offer:any)
  {
        console.log(this.index);
        console.log(offer);
        //console.log(typeof appiontment.start_time)
        //offer.start_time = offer.start_time.slice(0 , offer.start_time.length-3)
        //console.log(offer);

    this._Doctorservic.updateOffer(this.index,offer).subscribe((response)=>{
      //this.doctorAppiontmets = response;
      console.log(response);
      if(response.response == 'updated')
      {
        this.edited=response.response
      }
       //window.location.reload();
       this.ngOnInit();
    });
    /*console.log(appiontment);
    this.doctorAppiontmets.splice(this.index,1,appiontment);*/
  }
}