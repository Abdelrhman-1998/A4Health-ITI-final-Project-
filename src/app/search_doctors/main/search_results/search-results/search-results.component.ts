import { Component, OnInit, ViewChild } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {
  constructor() { 
    
  }
  // pagination
  p: any = 1;
  count: any = 5;
  doctors=[1,2,3,4,5,6,7];
  Appointments_date=[1,2,3,4,5,6,7];
  Appointments_time=["3:30PM","4:00PM","4:30PM","5:00PM","5:30PM","6:00PM","6:30PM"]
// owl carousel 
  ngOnInit(): void {
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
