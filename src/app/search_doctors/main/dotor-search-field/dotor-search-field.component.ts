import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-dotor-search-field',
  templateUrl: './dotor-search-field.component.html',
  styleUrls: ['./dotor-search-field.component.css']
})
export class DotorSearchFieldComponent implements OnInit {
  offers_options_arr!:any;
  Area_options_arr!:any;
  City_options_arr!:any;
  Specialization_options_arr!:any;
  reset_arrows(x1:any,x2:any,x3:any) {
    x1.style.transform="";
    x2.style.transform="";
    x3.style.transform="";
  };

  constructor() {

}
  ngOnInit(): void {
    this.Area_options_arr=["Sidi Gaber","Flemeng","Victoria"];
    this.City_options_arr=["Alexandria","Cairo","Aswan"];
    this.Specialization_options_arr=["Dermatology (Skin)","Dentistry (Teeth)","Psychiatry"];
    this.offers_options_arr=["offer1","offer2"];

}}
