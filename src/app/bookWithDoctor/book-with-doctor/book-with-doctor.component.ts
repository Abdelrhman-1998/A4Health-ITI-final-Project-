import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-with-doctor',
  templateUrl: './book-with-doctor.component.html',
  styleUrls: ['./book-with-doctor.component.css']
})
export class BookWithDoctorComponent implements OnInit {
  constructor() { }
  show:boolean=false;

  showAllReviews :boolean=false;
  ngOnInit(): void {
  }
showMore(){
  this.show=!this.show;
}
showReviews(){
this.showAllReviews=!this.showAllReviews;
}

}


