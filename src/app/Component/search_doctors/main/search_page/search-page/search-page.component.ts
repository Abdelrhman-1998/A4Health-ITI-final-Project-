import { Component, OnInit } from '@angular/core';
import { Doctor } from 'src/app/Models/doctor';
import { SearchResultsComponent } from '../../search_results/search-results/search-results.component';
import { DotorSearchFieldComponent } from '../../dotor-search-field/dotor-search-field.component';
@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {

  constructor() { }
  updated_search_results!:Doctor[];
  onUpdateSearchResults(x:any){
    console.log(x);
    this.updated_search_results=x;


  }
  ngOnInit(): void {
  }

}
