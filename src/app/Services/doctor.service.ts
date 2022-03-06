import { Injectable } from '@angular/core';
import { doctor } from '../Models/doctor';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  filtered_data:any;
  constructor(private httpClient:HttpClient) {
  
  }

  // get all data 

    getDataFromApi(){
      let url ="https://api.jsonbin.io/b/62213a3a7caf5d67835e87b5/8";
       return this.httpClient.get(url);
    }

  // search


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

// ------------------------------

  // filters

  filterByGender(gender:string,search_results:doctor[]){
    if(gender!="All"){
      let filterd_data=search_results.filter(ele => {
        return ele.gender.toLowerCase()== gender.toLowerCase();
      });
      return filterd_data;
    }
    else{
      return search_results;
    }
  }

  filterByTitle(title:string,search_results:doctor[]){
    if(title!="All"){
      let filterd_data=search_results.filter(ele => {
        return ele.title.toLowerCase()== title.toLowerCase();
      });
      return filterd_data;
    }
    else{
      return search_results;
    }


  }
  
  filterByAvaliability(avaliabilty:string,search_results:any[]){
    // do not forget to  change argument type of serach_results
    if(avaliabilty!="anyDay"){
      let filterd_data=search_results.filter(ele => {
        return ele.title.toLowerCase()==avaliabilty.toLowerCase();
      });
      return filterd_data;
    }
    else{
      return search_results;
    }
  }

  filterByFees(fees:string,search_results:doctor[]){
      let filterd_data;
      switch(fees)
      {
        case "any":
        filterd_data= search_results;
        break;
        case "lt-50":
            filterd_data=search_results.filter(function(ele){
              return ele.fees<50;
            })
          break;

        case "50-100":
          filterd_data=search_results.filter(function(ele){
            return ele.fees>=50 && ele.fees<=100;
          })
          break;
        case "100-200":
          filterd_data=search_results.filter(function(ele){
            return ele.fees>=100 && ele.fees<=200;
          })
          break;
        case "200-300":
          filterd_data=search_results.filter(function(ele){
            return ele.fees>=200 && ele.fees<=300;
          })
          break;
        case "gt-300":
          filterd_data=search_results.filter(function(ele){
            return ele.fees>300;
          })
          break;

        default:
          return "err";
          break;
      }
      return filterd_data;

  }
  
          // offers

// ------------------------------


  // sort

  sortByRating(view_results:doctor[]){

    // get rating first

    // sort rating 

    // match rating with doctors

    // remove duplication 

    // reorder doctors

    let ratings:any=[];

    view_results.forEach(element => {
          ratings.push(element.rating);
    });

    ratings.sort((a:any, b:any) => b-a);
    console.log(ratings)

    ratings= [ ... new Set (ratings)]; // get unique rates

   let sorted_data:any=[];
   ratings.forEach(function(element:any) {
      let matched_rating=view_results.filter(function(ele){
                  return ele.rating==element
          });
      sorted_data.push(...matched_rating)
   });
   console.log(sorted_data);
   return sorted_data;
  }

 sortByLowestPrice(view_results:doctor[]){
  let fees:any=[];
  view_results.forEach(element => {
    fees.push(element.fees);
  });

  // sort fees 

  fees.sort((a:any, b:any) => a-b);

  // unique fees

  fees= [ ... new Set (fees)]; 

  let sorted_data:any=[];
   fees.forEach(function(element:any) {
      let matched_rating=view_results.filter(function(ele){
                  return ele.fees==element
          });
      sorted_data.push(...matched_rating)
   });
   console.log(sorted_data);
   return sorted_data;

  }

  sortByHighestPrice(view_results:doctor[]){
    let fees:any=[];
    view_results.forEach(element => {
      fees.push(element.fees);
    });
  
    // sort fees 
  
    fees.sort((a:any, b:any) => b-a);
  
    // unique fees
  
    fees= [ ... new Set (fees)]; 
  
    let sorted_data:any=[];
     fees.forEach(function(element:any) {
        let matched_rating=view_results.filter(function(ele){
                    return ele.fees==element
            });
        sorted_data.push(...matched_rating)
     });
     console.log(sorted_data);
     return sorted_data;
  
  }

// ------------------------------
}
