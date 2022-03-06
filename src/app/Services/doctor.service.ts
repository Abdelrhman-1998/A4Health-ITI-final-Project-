import { Injectable } from '@angular/core';
import { doctor } from '../Models/doctor';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  filtered_data:any;
  constructor(private httpClient:HttpClient) {
      // this.getDataFromApi().subscribe(res=>{
      //   this.filtered_data=res;
      // })
  }

  // get all data 

    getDataFromApi(){
      let url ="https://api.jsonbin.io/b/62213a3a7caf5d67835e87b5/8";
       return this.httpClient.get(url);
    }

  // filters
  filterByName(user_entry:string,all_data:doctor[]){

    user_entry = user_entry.toLowerCase();

  let filterd_data=all_data.filter(ele => {
  let fname=ele.fname.toLowerCase();
  let lname=ele.lname.toLowerCase();
  let name=fname+" "+lname;

     if (user_entry.includes(" ")){
        return name==user_entry; 
      }
      else{
        return ele.fname.toLowerCase()==user_entry;
      }
            
      });
      return filterd_data;
  }

  filterByCity(city:"string",all_data:doctor[]){
    let filterd_data=all_data.filter(ele => {
      return ele.city.toLowerCase()==city.toLowerCase();
    });
    return filterd_data;
  }

  filterByArea(street:"string",all_data:doctor[]){
    let filterd_data=all_data.filter(ele => {
      return ele.street.toLowerCase()== street.toLowerCase();
    });
    return filterd_data;
  }

  filterBySpecilaization(specilaization:"string",all_data:doctor[]){
    let filterd_data=all_data.filter(ele => {
      return ele.specialization.toLowerCase()== specilaization.toLowerCase();
    });
    return filterd_data;
  }

  filterByGender(){

  }

  filterByTitle(){

  }
}
