import { Component, OnInit, Output, ViewEncapsulation} from '@angular/core';
import { NgModel } from '@angular/forms';
import { EventEmitter } from '@angular/core';
import { Doctor } from 'src/app/Models/doctor';
import { DoctorService } from 'src/app/Services/doctor.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dotor-search-field',
  templateUrl: './dotor-search-field.component.html',
  styleUrls: ['./dotor-search-field.component.css']
})
export class DotorSearchFieldComponent implements OnInit{

  offers_options_arr!:any;
  Area_options_arr!:any;
  all_streets:any;
  City_options_arr!:any;
  Specialization_options_arr!:any;
  test_array!:Doctor[];
  doctor_name:any;
  data_arrived:boolean=false;
  specializtion_name!:string;
  specializtion_name1!:string;
  all_data:any;
  sendToTheForm(x:any,y:any,z:any){
    x.value[y]=z;
  }
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

  constructor(private Doctor_Service:DoctorService , private route :ActivatedRoute) {


    this.City_options_arr=["Alexandria","Aswan","Asyut","Beheira","Beni Suef","Cairo","Dakahlia",
    "Damietta","Faiyum","Gharbia","Giza","Ismailia","Kafr El Sheikh","Luxor","Matruh","Minya","Monufia","New Valley",
    "North Sinai","Port Said","Qalyubia","Qena","Red Sea","Sharqia","Sohag","South Sinai","Suez"
  ];
    this.Specialization_options_arr;


    this.Doctor_Service.getDataFromApi().subscribe(res=>{
          this.test_array=res as any;
          console.log(this.test_array);
          this.data_arrived=true;
    });
    
    
}

  getAreaByCity(x:any){
    let filtered_data= this.all_data.filter(function(ele:any){
        return ele.city==x
    })
    console.log(filtered_data);
    let avaliable_streets:any=[];
    filtered_data.forEach(function(ele:any){
      avaliable_streets.push(ele.street);
    })
    
    this.Area_options_arr=avaliable_streets;
    console.log(this.Area_options_arr);
  }

  ngOnInit(): void {
    this.Doctor_Service.getDataFromApi().subscribe(res=>{
      let Data:any=res;
      let streets:any=[];
      this.all_data=Data;
      Data.forEach(function(ele:any){
         if(!streets.includes(ele)) {
           streets.push(ele.street);
         }           
      })
      this.Area_options_arr=streets;
    },err=>{

    })

    this.Doctor_Service.getSpecializations().subscribe(res =>{
      console.log(res);
      let specialization_names:any=[];
      let arr:any = res;
     arr.forEach(function(ele:any){
       let name = ele.name;
       specialization_names.push(name);
     })
      this.Specialization_options_arr=specialization_names;
    },
    err=>{
      console.log(err)
    });
    

    let specilaiztion = this.route.snapshot.params['id'];
    let doctor_name= this.route.snapshot.params['name'];
    console.log(specilaiztion);
    if(specilaiztion!="" && specilaiztion!=null){
      this.specializtion_name= specilaiztion;
      this.specializtion_name1=specilaiztion;
    }
    else{
      this.specializtion_name1="Choose Speciality"
    }
    // if(doctor_name!="" && doctor_name!=null){
    //   // this.specializtion_name= specilaiztion;
    //   // this.specializtion_name1=specilaiztion;
    //   this.doctor_name=doctor_name;
    // }
    // else{
    //   // this.specializtion_name1="Choose Speciality"
    // }




    //for testing only
   
}

}
