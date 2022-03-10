

import { Component, Input,OnChanges,SimpleChanges } from '@angular/core';
import { Doctor } from './Models/doctor';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  /// Arwa
  title = 'Angular_project';
  // ------ 

  // Abdelrhman 
  updated_search_results!:Doctor[];
  onUpdateSearchResults(x:any){
    console.log(x);
    this.updated_search_results=x;


  }
  ngonChange(){

  }
  // -----

}
