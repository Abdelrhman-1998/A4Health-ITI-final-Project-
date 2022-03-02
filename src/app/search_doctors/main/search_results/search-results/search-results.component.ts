import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {
  p: any = 1;
  count: any = 5;
  doctors=[1,2,3,4,5,6,7];
  constructor() { 

  }

  ngOnInit(): void {
  }

}
