import { Component, Input, OnInit,OnChanges, ViewChild,SimpleChanges, ElementRef, ViewEncapsulation, Output } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Doctor } from 'src/app/Models/doctor';
import { DoctorService } from 'src/app/Services/doctor.service';
import { RatingStarsPipe } from 'src/app/Pipes/rating-stars.pipe';
import { NgModule } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AppModule } from 'src/app/app.module';
import { ActivatedRoute } from "@angular/router";
import { GlobaltokenService } from 'src/app/gt/globaltoken.service';
import { MainpulateTimesPipe } from 'src/app/Pipes/mainpulate-times.pipe';
import { SortAppointmentsPipe } from 'src/app/Pipes/sort-appointments.pipe';
@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls:['./search-results.component.css']
  
})
export class SearchResultsComponent implements OnInit {

  sort_status:boolean=false;
  switch_status!:boolean;
  offers_status!:boolean;
  top_arrow!:boolean;//appointment
  submmitedForm!:{}
  appointment_id!:number;
  appointment_previous_element!:any;

  choosenBookingOption:any;
  confirmOption:any;
  confirmDate:any;
  choosenDate:any;
  modal_appointment:any;
  
  app_previous_li:any;
  app_time:any;
  // storeAppointment(x:any){
  //   this.appointments=x;
  // } 

  constructor(private Doctor_service:DoctorService ,   private route: ActivatedRoute,private patient:GlobaltokenService) { 
 
  }
  // tocken from api stroed in local storage
  confirm_condition!:boolean;
 
  
  printValues(x:any){
      console.log(x.value);
  }

  // pagination

  p: any = 1;
  count: any = 3;

  //-----------------

  // Appointment details

  goToTop(x:any){
      x.scrollTop=0;
  }
  store(x:any){
    const pipe1= new MainpulateTimesPipe();
    const pipe2 = new SortAppointmentsPipe();
    this.modal_appointment=x;
    this.modal_appointment=pipe1.transform(this.modal_appointment);
    this.modal_appointment=pipe2.transform(this.modal_appointment)
  }
  //------------------
  submitAppointment(x:any,y:any,z:any,appointment_id:number){
    console.log(this.confirm_condition);
    // check authentication status
    if(this.confirm_condition){
      x.value.date=y.value;
      this.choosenBookingOption=x.value.appointment;
      this.choosenDate=x.value.date;
      console.log(x.value.appointment);
      console.log(x.value);
      this.submmitedForm=x;
      $("#Appointments").modal('hide');
      $("#confirm_appointment").modal('show');
      this.appointment_id=appointment_id;
     
    }
    else{
      $("#Appointments").modal('hide');
    }
  }
  submitAppointmentModal(x:any,y:any,z:any,appointment_id:number){
    console.log(this.confirm_condition);
    if(this.confirm_condition){
      x.value.date=y.value;
      x.value.appointment=this.app_time;
      console.log(x.value);
      this.choosenBookingOption=x.value.appointment;
      this.choosenDate=x.value.date;
      console.log(x.value.appointment);
      console.log(x.value);
      this.submmitedForm=x;
      $("#Appointments").modal('hide');
      $("#confirm_appointment").modal('show');
      this.appointment_id=appointment_id;
     
    }
    else{
      $("#Appointments").modal('hide');
    }
  }
  checkScroll(x:any,y:any){
   
    if(x.scrollTop==0){
      y.style="display:none";
    }
    else{
     y.style="display:block";
    }
 
   }
   disableAllOptions(x:any,y:any){
      // this. li_check_click=true;
      if(this.app_previous_li){
        this.app_previous_li.style="background-color:transparent;color: #0075ff ;font-size:14px;"      
      }
      this.app_previous_li=x;
      this.app_previous_li.style="background-color: #0075ff;color: white;font-size:14px;";
      this.app_time=y;
      console.log(y);
   }
   disableAllbuttons(x:any){
    if(this.appointment_previous_element){
      this.appointment_previous_element.disabled=true;
    }
      x.disabled=false;
      this.appointment_previous_element=x;
   }
//-------------------------------------

// confirm take submmited form

naivgateToReservation(x:any){
  console.log(x.value);
  let time_array = x.value.appointment.split(" ");
  let time_prefix = time_array[1];
  let time=time_array[0].split(":");
  let patient_time;
  if(time_prefix.trim()=="PM"){
        let value= +time[0]+12;
        patient_time=value+":"+time[1];
  }
  else{
    patient_time=time[0]+":"+time[1]
  }


  let patient_id:any;
  this.patient.idValue.subscribe(res=>{
    console.log(res);
    patient_id=res;
  },err=>{
    console.log(err);
  })
  let appointment_id=this.appointment_id;
  console.log(appointment_id);
  let appointment_object={"appointment_id":appointment_id,"patient_time":patient_time,"patient_id":patient_id};
  console.log(appointment_object);

  console.log(this.confirm_condition);

  this.Doctor_service.postAppointmetApi(patient_id,appointment_object).subscribe(res=>{
    console.log(appointment_object);
    console.log(res);
    this.confirmOption=this.choosenBookingOption;
    this.confirmDate=this.choosenDate;
    console.log(this.confirmDate)

    console.log(this.confirmOption);
  },err=>{
    console.log(err);
  })
}

 // display
  view_data!:Doctor[];
  view_length!:any;

  // output search
  @Input() Doctor_data!:Doctor[];



  data_length!:number;

sort_list_status:boolean=false;
 
showResults(x:any){
    console.log(x)
  }


// to navigate to top of the section
navigate(x:any){
  window.scrollTo(0, x!.offsetTop);
}
// toggle sort status
toggleStatus(){
  this.sort_list_status=!this.sort_list_status;
}
// on submit sort lisy
submitSort(x:NgForm){
  x.ngSubmit.emit();
  console.log(x.value["sorting"]);
  let sorted_data=this.view_data;
        switch (x.value["sorting"]){
          case "TR":
            sorted_data=this.Doctor_service.sortByRating(this.view_data);
            break;
          case "LH":
            sorted_data=this.Doctor_service.sortByLowestPrice(this.view_data);
            break;
          case "HL":
            sorted_data=this.Doctor_service.sortByHighestPrice(this.view_data);
            break;
          default:
            break;
        }
  this.view_data=sorted_data;
  this.view_length=sorted_data.length;
  this.sort_list_status=!this.sort_list_status;

  // go back to first page
  this.p=1;

  // x.resetForm();
  // test sort top_rated
  // this.view_data=this.Doctor_service.sortByRating(this.view_data);
  // this.view_length=this.view_data.length;
  // --------------------------------

  // test lowest price

  // this.view_data=this.Doctor_service.sortByLowestPrice(this.view_data);
  // this.view_length=this.view_data.length;

  //---------------------


    // test Highest price 

    // this.view_data=this.Doctor_service.sortByHighestPrice(this.view_data);
    // this.view_length=this.view_data.length;
  
    //--------------------

}

// on submit filter list
submitFilter(x:NgForm,y:NgForm){
  if(x.value["offers"]){
      this.offers_status=true;
  }
  else{
    this.offers_status=false;
  }
  let filtered_data:any=this.Doctor_data;
  console.log(filtered_data);
  for (let key in x.value) {
        if(x.value[key]!="" && x.value[key] !=null){
          console.log(x.value);
         switch(key){
           case "gender":
             filtered_data=this.Doctor_service.filterByGender(x.value[key],filtered_data);
             break;
           case "title":
            filtered_data=this.Doctor_service.filterByTitle(x.value[key],filtered_data);
             break;
           case "fees":
            filtered_data=this.Doctor_service.filterByFees(x.value[key],filtered_data);
             break;
            case "avaliabilty":
              filtered_data=this.Doctor_service.filterByAvaliability(x.value[key],filtered_data);
              break;
            case "offers":
              filtered_data=this.Doctor_service.filterByOffers(filtered_data);
            break;

          default:
            break;
         }

        }
  }
  console.log(filtered_data);
  // this.view_data=filtered_data;
  // this.view_length=filtered_data.length;
  


  // check if any of sort list inputs are checked
  let sorted_data=filtered_data;


  let key=y.value["sorting"];
  console.log(key);
  switch (key){
    case "TR":
      sorted_data=this.Doctor_service.sortByRating(sorted_data);
      break;
    case "LH":
      sorted_data=this.Doctor_service.sortByLowestPrice(sorted_data);
      break;
    case "HL":
      sorted_data=this.Doctor_service.sortByHighestPrice(sorted_data);
      break;
    default:
      break;
  }
  
  this.view_data=sorted_data;
  this.view_length=sorted_data.length;

     // go back to first page
     this.p=1;

  // test gender filter 

  // console.log(x);
  // console.log(x.gender);
  // console.log(this.Doctor_data);
  // let filterResult=this.Doctor_service.filterByGender(x.gender,this.Doctor_data);
  // this.view_data=filterResult;
  // this.view_length=this.view_data?.length;

  //----------


  // test title filter

  // console.log(x);
  // console.log(x.title);
  // console.log(this.Doctor_data);
  // let filterResult=this.Doctor_service.filterByTitle(x.title,this.Doctor_data);
  // this.view_data=filterResult;
  // this.view_length=this.view_data?.length;
  

  //----------

  // test Avaliability filter
  

  
  //------------------

  // test fees filter 

  // console.log(x);
  // console.log(x.fees);
  // let filterResult:any=this.Doctor_service.filterByFees(x.fees,this.Doctor_data);
  // this.view_data=filterResult;
  // this.view_length=this.view_data?.length;
  

  // ------------------

}


// owl carousel 
  ngOnInit(): void {
    this.patient.itemValue.subscribe(res=>{
      console.log(res);
 
      if(res =="null" || res=="" || res==null){
          this.confirm_condition=false;
      }
      else{
          this.confirm_condition=true;
      }
     
    },
      err=>{
        console.log(err);
     
         
      });




    console.log(this.confirm_condition);
    //display data from api
    this.Doctor_service.getDataFromApi().subscribe(
      res=>{  
        console.log(res);
        this.Doctor_data=res as any;
        this.view_data=res as any;
        // this.Doctor_model_data=res as any;
         // get speciality from home page

        let specilaiztion = this.route.snapshot.params['id'];
        console.log(specilaiztion);
        let doctor_name=this.route.snapshot.params['doctorID'];
        if(specilaiztion=="" || specilaiztion==null ){
          this.view_data=res as any;
          this.view_length=this.view_data.length;
          console.log(res);
        }
        else{
          console.log(this.view_data);
          console.log(this.Doctor_data);
              this.view_data=this.Doctor_service.filterBySpecilaization(specilaiztion,this.Doctor_data);
              console.log(this.view_data);
              this.view_length=this.view_data.length;
        }



// from make an appointment part date 15/3
        // let doctor_fullname= this.patient.doctor_fullname;
        // if(doctor_fullname == "" || doctor_fullname==null ){
        //   this.view_data=res as any;
        //   this.view_length=this.view_data.length;
        //   console.log(res);
        // }
        // else{
        //   this.view_data=this.Doctor_service.filterByName(doctor_fullname,this.Doctor_data);
        //   console.log(this.view_data);
        //   this.view_length=this.view_data.length;
        // }
     
        // localStorage.setItem("Authorization","Bearer 49|IYV2KWStxVTnXIXRCSWVamJOGrU0eAaKjDO8DUEM");
        // localStorage.setItem("patient_id","3");
        
        //--------------------------------


      },
      err=>{
        console.log(err);
      }
    )
  }
  ngOnChanges(){

    this.view_data=this.Doctor_data;
    this.view_length= this.view_data?.length; 
  
    // go back to first page
    this.p=1;

    
  }
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 600,
    navText: ['&#8249', '&#8250;'],
    responsive: {
      0: {
        items: 1 
      },
      300: {
        items: 2
      },
      760: {
        items: 3
      },
      1000: {
        items: 4
      }
    },
    nav: true
  }
}
