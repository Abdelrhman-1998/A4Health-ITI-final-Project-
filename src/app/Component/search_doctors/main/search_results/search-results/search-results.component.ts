import { Component, Input, OnInit,OnChanges, ViewChild,SimpleChanges, ElementRef, ViewEncapsulation } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Doctor } from 'src/app/Models/doctor';
import { DoctorService } from 'src/app/Services/doctor.service';
import { RatingStarsPipe } from 'src/app/Pipes/rating-stars.pipe';
import { NgModule } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AppModule } from 'src/app/app.module';

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
  appointment_previous_element!:any;
  constructor(private Doctor_service:DoctorService) { 
      
  }

  // pagination

  p: any = 1;
  count: any = 3;

  //-----------------

  // Appointment details

  goToTop(x:any){
      x.scrollTop=0;
  }
  //------------------
  submitAppointment(x:any,y:any){
    x.value.date=y.value;
      console.log(x.value);
  }
  checkScroll(x:any,y:any){
    if(x.scrollTop==0){
      y.style="display:none";
    }
    else{
     y.style="display:block";
    }
 
   }
   disableAllbuttons(x:any){
    if(this.appointment_previous_element){
      this.appointment_previous_element.disabled=true;
    }
      x.disabled=false;
      this.appointment_previous_element=x;
   }
//-------------------------------------

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
    //display data from api
    this.Doctor_service.getDataFromApi().subscribe(
      res=>{  
        console.log(res);
        // this.Doctor_model_data=res as any;
        this.Doctor_data=res as any;
        this.view_data=res as any;
        this.view_length=this.view_data.length;
        console.log(res);
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
