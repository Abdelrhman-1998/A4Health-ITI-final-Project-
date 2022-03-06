import { Component, Input, OnInit,OnChanges, ViewChild,SimpleChanges } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { doctor } from 'src/app/Models/doctor';
import { DoctorService } from 'src/app/Services/doctor.service';
import { RatingStarsPipe } from 'src/app/rating-stars.pipe';
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


  // display

 @Input() doctor_data!:doctor[];
  data_length!:number;

// owl carousel 
  ngOnInit(): void {
    //display data from api
    this.doctor_service.getDataFromApi().subscribe(
      res=>{  
        console.log(res);
        // this.doctor_model_data=res as any;
        this.doctor_data=res as any;
        this.data_length=this.doctor_data.length;
        console.log(res);
      },
      err=>{
        console.log(err);
      }
    )
  }
  ngOnChanges(){
 
    this.data_length=this.doctor_data?.length;
   
   
    
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
      400: {
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
