import { Injectable } from '@angular/core';
import { Doctor } from '../Models/doctor';
import { HttpClient, HttpHeaders } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  filtered_data:any;
  constructor(private httpClient:HttpClient) {
  
  }

  // get all data 
  header:any =new HttpHeaders().set("Authorization",localStorage.getItem('Authorization')!);

    getDataFromApi(){
      let url ="https://a4-health.herokuapp.com/api/doctors";
       return this.httpClient.get(url);
    }
    getDoctorInfo(id:any){
      let url="https://a4-health.herokuapp.com/api/doctors/"+id+"/info";
      return this.httpClient.get(url);
    }
    getDoctorReviews(id:any){
      let url="https://a4-health.herokuapp.com/api/doctors/"+id+"/reviews";
      return this.httpClient.get(url);
    }
    postAppointmetApi(patient_id:number,appiontment:{}){
      // console.log(this.header);
      let header= new HttpHeaders().set("Authorization",localStorage.getItem('Authorization')!);
      let url="https://a4-health.herokuapp.com/api/patients/"+patient_id+"/reservations";
      console.log(url);
      return this.httpClient.post(url,appiontment,{'headers':header});

    }
    getSpecializations(){
      let url="https://a4-health.herokuapp.com/api/specializations";
      return this.httpClient.get(url);
    }

  // search


  filterByName(user_entry:string,all_data:Doctor[]){
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
  filterById(id:number,all_data:Doctor[]){
    let filterd_data=all_data.filter(ele => {
      return ele.id ==id;
    });
    return filterd_data
  }
  filterByCity(city:"string",all_data:Doctor[]){
    let filterd_data=all_data.filter(ele => {
      return ele.city.toLowerCase()==city.toLowerCase();
    });
    return filterd_data;
  }

  filterByArea(street:"string",all_data:Doctor[]){
    let filterd_data=all_data.filter(ele => {
      return ele.street.toLowerCase()== street.toLowerCase();
    });
    return filterd_data;
  }

  filterBySpecilaization(specilaization:"string",all_data:Doctor[]){
    let filterd_data=all_data.filter(ele => {
      return ele.specialization.toLowerCase().trim()== specilaization.toLowerCase().trim();
    });
    return filterd_data;
  }

// ------------------------------

  // filters

  filterByGender(gender:string,search_results:Doctor[]){
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

  filterByTitle(title:string,search_results:Doctor[]){
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
  
  filterByAvaliability(avaliabilty:string,search_results:Doctor[]){
    // do not forget to  change argument type of serach_results
    if(avaliabilty=="today"){
      let today:any= new Date();
      today=today.toString().split(" ").slice(0,4).join("-");
        let filtered_data=search_results.filter(function(ele){
          let dates:any=[];
                ele.appointment.forEach(function(ele){
                      dates.push(new Date (ele.date).toString().split(" ").slice(0,4).join("-"));
                });
          return dates.includes(today)
        })
        console.log(filtered_data);
        return filtered_data;
    }
    else if(avaliabilty=="tomorrow"){
      let tomorrow_date:any=new Date();
      tomorrow_date.setDate(new Date().getDate() + 1);
      tomorrow_date= tomorrow_date.toString().split(" ").slice(0,4).join("-");
        let filtered_data=search_results.filter(function(ele){
          let dates:any=[];
                ele.appointment.forEach(function(ele){
                      dates.push(new Date (ele.date).toString().split(" ").slice(0,4).join("-"));
                });
          return dates.includes(tomorrow_date)
        })
        console.log(filtered_data);
        return filtered_data;

    }
    else{
      return search_results;
    }

  }

  filterByFees(fees:string,search_results:Doctor[]){
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
  

  filterByOffers(search_results:Doctor[]){
      let filtered_data=search_results.filter(function(ele){
        return ele.offers==true
      })
      return filtered_data;
  }

          // offers

// ------------------------------


  // sort

  sortByRating(view_results:Doctor[]){

    // get rating first

    // sort rating 

    // match rating with Doctors

    // remove duplication 

    // reorder Doctors

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

 sortByLowestPrice(view_results:Doctor[]){
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

  sortByHighestPrice(view_results:Doctor[]){
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
