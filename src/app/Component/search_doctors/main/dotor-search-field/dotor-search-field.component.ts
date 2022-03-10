import { Component, OnInit, Output, ViewEncapsulation} from '@angular/core';
import { NgModel } from '@angular/forms';
import { EventEmitter } from '@angular/core';
import { Doctor } from 'src/app/Models/doctor';
import { DoctorService } from 'src/app/Services/doctor.service';

@Component({
  selector: 'app-dotor-search-field',
  templateUrl: './dotor-search-field.component.html',
  styleUrls: ['./dotor-search-field.component.css']
})
export class DotorSearchFieldComponent implements OnInit{

  offers_options_arr!:any;
  Area_options_arr!:any;
  City_options_arr!:any;
  Specialization_options_arr!:any;
  test_array!:Doctor[];
  data_arrived:boolean=false;
  resetSpans(x1:any,x3:any,x4:any){
      x1.innerText='Choose specialty';
      x3.innerText='Choose Area';
      x4.innerText='Choose City';
    
  }
   
  // reset search arrows
  search_results:Doctor[]=[];
  @Output() update_search_results:EventEmitter <Doctor[]> = new EventEmitter <Doctor[]>();
  reset_arrows(x1:any,x2:any) {
    x1.style.transform="";
    x2.style.transform="";
 
  };
  resetAllArrows(x1:any,x2:any,x3:any){
    x1.style.transform="";
    x2.style.transform="";
    x3.style.transform="";
 
  }

  showResults(data:any){
    console.log(data);
  this.search_results=this.test_array;
    console.log(this.test_array);
    console.log(data);
  for (const key in data) {
    if((data[key]!="") && (data[key]!=null)){
      console.log('entered')
          switch (key) {
            case "search":
              this.search_results=this.Doctor_Service.filterByName(data["search"],this.search_results);
              console.log(this.search_results);
              break;
            case "city":
              
              this.search_results=this.Doctor_Service.filterByCity(data["city"],this.search_results);
              
              break;
              case "area":
                this.search_results=this.Doctor_Service.filterByArea(data["area"],this.search_results);
                
                break;
              case "speciality":
                this.search_results=this.Doctor_Service.filterBySpecilaization(data["speciality"],this.search_results);
                  
                  break;
            default:
              break;
          }
    }
    window.scrollTo(0, document.getElementById('searchResults')!.offsetTop);
    
  }
  console.log(this.search_results);
  this.update_search_results.emit(this.search_results);
  }
  constructor(private Doctor_Service:DoctorService) {

    this.Area_options_arr=["50 vic","20 flem","30 roshdy","70 gin","60 vic"];
    this.City_options_arr=["Alexandria","Cairo","Aswan","Giza"];
    this.Specialization_options_arr=["Neurology","Dentistry","Dermatology","Orthopedics","Audiology","Family Medicine"];
    this.offers_options_arr=["offer1","offer2"];

    this.Doctor_Service.getDataFromApi().subscribe(res=>{
          this.test_array=res as any;
          console.log(this.test_array);
          this.data_arrived=true;
    });
    
    
}

  ngOnInit(): void {

    //for testing only
   
}

}
