import { Component, Input, OnInit,OnChanges, ViewChild,SimpleChanges } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { doctor } from 'src/app/Models/doctor';
import { DoctorService } from 'src/app/Services/doctor.service';
import { RatingStarsPipe } from 'src/app/rating-stars.pipe';
import { NgModule } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AppModule } from 'src/app/app.module';
@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {


  constructor(private doctor_service:DoctorService) { 
      
  }
  // pagination

  p: any = 1;
  count: any = 3;

  //------------------

  Appointments_date=[1,2,3,4,5,6,7];
  Appointments_time=["3:30PM","4:00PM","4:30PM","5:00PM","5:30PM","6:00PM","6:30PM"];
  sort_status:boolean=false;

 // display
  view_data!:doctor[];
  view_length!:any;

  // output search
  @Input() doctor_data!:doctor[];
  data_length!:number;

sort_list_status:boolean=false;
 
showResults(x:any){
    console.log(x)
  }


// to navigate to top of the section
navigate(){
  window.scrollTo(0, document.getElementById('searchResults')!.offsetTop);
}

toggleStatus(){
  this.sort_list_status=!this.sort_list_status;
}
// on submit sort lisy
submitSort(x:any){
  console.log(x.value["sorting"]);
  let sorted_data=this.view_data;
        switch (x.value["sorting"]){
          case "TR":
            sorted_data=this.doctor_service.sortByRating(this.view_data);
            break;
          case "LH":
            sorted_data=this.doctor_service.sortByLowestPrice(this.view_data);
            break;
          case "HL":
            sorted_data=this.doctor_service.sortByHighestPrice(this.view_data);
            break;
          default:
            break;
        }
  this.view_data=sorted_data;
  this.view_length=sorted_data.length;
  this.sort_list_status=!this.sort_list_status;

  // go back to first page
  this.p=1;


  // test sort top_rated
  // this.view_data=this.doctor_service.sortByRating(this.view_data);
  // this.view_length=this.view_data.length;
  // --------------------------------

  // test lowest price

  // this.view_data=this.doctor_service.sortByLowestPrice(this.view_data);
  // this.view_length=this.view_data.length;

  //---------------------


    // test Highest price 

    // this.view_data=this.doctor_service.sortByHighestPrice(this.view_data);
    // this.view_length=this.view_data.length;
  
    //--------------------

}

// on submit filter list
submitFilter(x:any){

  let filtered_data:any=this.doctor_data;

  for (let key in x) {
        if(x[key]!="" && x[key] !=null){
         switch(key){
           case "gender":
             filtered_data=this.doctor_service.filterByGender(x[key],filtered_data);
             break;
           case "title":
            filtered_data=this.doctor_service.filterByTitle(x[key],filtered_data);
             break;
           case "fees":
            filtered_data=this.doctor_service.filterByFees(x[key],filtered_data);
             break;
          // case "":
          //   break;
          // case "":
          //   break;
          default:
            break;
         }

        }
  }
  this.view_data=filtered_data;
  this.view_length=filtered_data.length;


   // go back to first page
   
   this.p=1;

  // test gender filter 

  // console.log(x);
  // console.log(x.gender);
  // console.log(this.doctor_data);
  // let filterResult=this.doctor_service.filterByGender(x.gender,this.doctor_data);
  // this.view_data=filterResult;
  // this.view_length=this.view_data?.length;

  //----------


  // test title filter

  // console.log(x);
  // console.log(x.title);
  // console.log(this.doctor_data);
  // let filterResult=this.doctor_service.filterByTitle(x.title,this.doctor_data);
  // this.view_data=filterResult;
  // this.view_length=this.view_data?.length;
  

  //----------

  // test Avaliability filter
  

  
  //------------------

  // test fees filter 

  // console.log(x);
  // console.log(x.fees);
  // let filterResult:any=this.doctor_service.filterByFees(x.fees,this.doctor_data);
  // this.view_data=filterResult;
  // this.view_length=this.view_data?.length;
  

  // ------------------

}


// owl carousel 
  ngOnInit(): void {
    //display data from api
    this.doctor_service.getDataFromApi().subscribe(
      res=>{  
        console.log(res);
        // this.doctor_model_data=res as any;
        this.doctor_data=res as any;
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

    this.view_data=this.doctor_data;
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
