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
  constructor() {

}
  ngOnInit(): void {
    this.Area_options_arr=["Sidi Gaber","Flemeng","Victoria"];
    this.City_options_arr=["Alexandria","Cairo","Aswan"];
    this.Specialization_options_arr=["Dermatology (Skin)","Dentistry (Teeth)","Psychiatry"];
    this.offers_options_arr=["offer1","offer2"];
  // handling arrow using native DOM


  //   let arrows = document.getElementsByClassName("searchItems") as HTMLCollectionOf<HTMLElement>; 
  //   let ele_arrows=document.getElementsByClassName("fa-angle-down") as HTMLCollectionOf<HTMLElement>; 
  //   for (let key in arrows) {
  //   if(!isNaN(+key)){
  //       let ele=arrows[key];
  //       let ele_arrow=ele_arrows[key];
  //       let index=key;
  //       ele.addEventListener("click",function toggle_arrow(){ 
  //          for (let key in ele_arrows ){
  //           if(!isNaN(+key)){
  //               if(key!=index){
  //                   ele_arrows[key].style.transform="";
  //               }
  //           }
  //          }
  //           ele_arrow.style.transform==""?ele_arrow.style.transform="rotate(180deg)":ele_arrow.style.transform="";
  //       });
  //   }}
  // }

}}
