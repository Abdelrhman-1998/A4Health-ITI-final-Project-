import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortAppointments'
})
export class SortAppointmentsPipe implements PipeTransform {

  transform(value: [{"Date":string,"Time":[]}], ...args: unknown[]): any {
        let appointments=value;
        let dates_old:any=[];
        // console.log(appointments);

        //filter old dates 
        let today=new Date();
        let today_string= today.toDateString().split(" ").slice(0,4).join("");


        appointments.forEach(function(ele){
         let date = new Date(ele["Date"]);
         let date_string=date.toDateString().split(" ").slice(0,4).join("");
         if(date > today ||  date_string==today_string){
            dates_old.push(( (ele["Date"])));
         }
            
        });
        function dateComparison(a:Date, b:Date) {
          const date1:any = new Date(a);
          const date2:any = new Date(b);
          
          return (date1 - date2);
      }
      
    let sorted_dates=dates_old.sort(dateComparison);
    // console.log(sorted_dates);
    // console.log(sorted_dates);
    let sorted_appointments:any=[];
    sorted_dates.forEach(function(ele:any){
      let x=ele;
          appointments.forEach(element => {
                  if(x==element.Date && !sorted_appointments.includes(element)){
                      sorted_appointments.push(element);
                      // console.log("da");

                  }
          });
    });
      return sorted_appointments;
        
  }

}
