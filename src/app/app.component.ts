import { Component, Input,OnChanges,SimpleChanges } from '@angular/core';
import { doctor } from './Models/doctor';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular_project';
  updated_search_results!:doctor[];
  onUpdateSearchResults(x:any){
    console.log(x);
    this.updated_search_results=x;


  }
  ngonChange(){

  }
}
