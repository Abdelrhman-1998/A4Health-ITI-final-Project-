import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'mainpulateTimes'
})
export class MainpulateTimesPipe implements PipeTransform {

  transform(value:[{"id":number,"start_time":string,"date":string,"patient_limit":number,"examination_time":number,"doctor_id":number,"reserved_times":[""]}], ...args: unknown[]): any {
    function transformTimes (_patient_limit:number,_examination_time:number,_start_time:string){
      let Times=[];
  
      // mainpulate string to numbers
      let patient_limit=_patient_limit;
      let examination_time=_examination_time;
    
      let starting_time:any=_start_time;
      // console.log(starting_time);
      starting_time=starting_time.split(":");
      starting_time=starting_time.slice(0,2);
      let time:any=starting_time;
    
      time=time.map(function(ele:any){
          return +ele;
      })
      // console.log(time);
      //---------------------------------------
    
    
      const starting_hours=time[0];
      const starting_minutes=time[1];
    
      let time_minutes=starting_minutes;
      let time_hours_24=starting_hours;
      let time_hours_12=starting_hours;
      let time_prefix;
    
      if(starting_hours==12){
    
          time_prefix=" PM";
      }
      else if(starting_hours>12){
          time_hours_12=starting_hours-12;
          time_prefix=" PM";
      }
      else{
          time_prefix=" AM";
      }
    
      // push starting time
    
    
    if(time_minutes<10){
      Times.push( time_hours_12+":"+"0"+time_minutes+time_prefix);
    }
    else{
      Times.push( time_hours_12+":"+time_minutes+time_prefix);
    }
   
      // console.log(Times);
    
    
    
    
      for(let i=1;i<=patient_limit-1;++i){
          // create rest of timea
          if(time_minutes+examination_time<60){
                      time_minutes=time_minutes+examination_time;
                      // console.log(time_minutes);
                      // console.log("hour:", time_hours_12);
            
          }
          else{
              time_minutes=time_minutes+examination_time-60;
              time_hours_12= time_hours_12+1;
              time_hours_24=time_hours_24+1;
              if(time_hours_24==24){
                  time_hours_24=1;
              }
              if( time_hours_12>12){
                  time_hours_12= time_hours_12-12;
              }
              // console.log(time_minutes);
              // console.log("hour:", time_hours_12);
          }
          // add prefix
          if(time_hours_24>=12 && time_hours_24<=23){
              time_prefix=" PM";
          }
          else{
              time_prefix=" AM";
          }
          if(time_minutes<10){
            let time= time_hours_12+":"+"0"+time_minutes+time_prefix;
            Times.push(time);
          }
          else{
            let time= time_hours_12+":"+time_minutes+time_prefix;
            Times.push(time);
          }
         
              
      }
      // console.log(Times);
        return Times;
      }
      function transform_24(times:any){
        let all_times:any=[];
        times.forEach(function(ele:any){
          let time_array = ele.split(" ");
          let time_prefix = time_array[1];
          let time=time_array[0].split(":");
          let patient_time;
          if(time_prefix.trim()=="PM"){
                let value= +time[0]+12;
                patient_time=value+":"+time[1];
          }
          else{
            patient_time=time[0]+":"+time[1]
          }
          all_times.push(patient_time);
        })
      
        return all_times;
      }
      function transform_12(times:any){
        let time:any=[];
  
        times.forEach(function(ele:any){
          let final_time;
            let time_arr= ele.split(":");
            let first_element=+time_arr[0];
            let prefix;
            if(first_element>12){
              first_element=first_element-12;
              prefix=" PM";
            }
            else{
              prefix=" AM";
            }
          final_time=first_element+":"+time_arr[1]+prefix;
          time.push(final_time);
        })
        return time;
      }
    // let Date=value.Date;
    let results:any=[];

    // console.log(value);
    console.log(value);
    // let Output:any=[];

        value.forEach(function(ele:any)

        {
          // console.log(value);
          
          let object={"Date":'',"Time":[""],"id":0};
          object.id=ele.id;
          object.Date=ele.date;
          let reserved_data:any=ele.reserved_times ;
          reserved_data= reserved_data.map(function(ele:any){
              
                  return ele.slice(0,5);
          })
          // console.log(ele.date);
          reserved_data=reserved_data.map(function(ele:any){
                if(ele[0]=="0"){
                  return ele.slice(1);
                }
                else{
                  return ele
                }
          })
        //   // console.log(reserved_data);
    
        //   // all dates without filtering
    
          object.Time=transformTimes(ele.patient_limit,ele.examination_time,ele.start_time);
    
        //   // get dates in 24 hours 
    
          let all_data_24=transform_24(object.Time);
          // // console.log(reserved_data);
          // // filter reserved data 
          let filtered_data:any=[];
    
          all_data_24.forEach(function(ele1:any){
              let flag=true;
              reserved_data.forEach(function(ele2:any){
                      if(ele1.trim() == ele2.trim()){
                          flag=false
                      }
                })
              if(flag){
                filtered_data.push(ele1);
              }
          })
    
        //   // console.log(filtered_data);
        //   // console.log(transform_12(filtered_data));
    
          object.Time=transform_12(filtered_data);
        //   // check if any dates are reserved 
    
    
          results.push(object);
        });
    
      


 
    //   console.log(results);
      return results

  }

}
