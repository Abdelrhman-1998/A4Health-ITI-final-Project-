import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'mainpulateTimes'
})
export class MainpulateTimesPipe implements PipeTransform {

  transform(value:[{"id":number,"start_time":string,"date":string,"patient_limit":number,"examination_time":number,"doctor_id":number}], ...args: unknown[]): any {
    function transformTimes (_patient_limit:number,_examination_time:number,_start_time:string){
      let Times=[];
  
      // mainpulate string to numbers
      let patient_limit=_patient_limit;
      let examination_time=_examination_time;
    
      let starting_time=_start_time;
      let time:any=starting_time.split(":").slice(0,2);
    
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
                      console.log(time_minutes);
                      console.log("hour:", time_hours_12);
            
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
              console.log(time_minutes);
              console.log("hour:", time_hours_12);
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
     
    // let Date=value.Date;
  let results:any=[];

  console.log(value);
  value.forEach(function(ele){
    let object={"Date":'',"Time":[""],"id":0};
    object.id=ele.id;
    object.Date=ele.date;
    console.log(ele.date);
    object.Time=transformTimes(ele.patient_limit,ele.examination_time,ele.start_time);
    results.push(object);
  })


 
      console.log(results);
      return results

  }

}
