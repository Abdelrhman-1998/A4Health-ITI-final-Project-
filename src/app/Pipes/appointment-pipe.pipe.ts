import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'appointmentPipe'
})
export class AppointmentPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    // transform date from string to obj date

    let today_date = new Date();
    let tomorrow_date=new Date();

    tomorrow_date.setDate(new Date().getDate() + 1);

    let today=today_date.toString().split(" ").slice(0,4);
    let tomorrow=tomorrow_date.toString().split(" ").slice(0,4);

    let date_object= new Date(value);
    let date_array=date_object.toDateString().split(" ");

    const day_name=date_array[0];
    let month_number=date_object.getMonth()+1 + "";
    if(month_number.length==1){
        month_number="0"+month_number;
    }
    const day_number=date_array[2];

    let view1 =day_name+" "+month_number+"/"+day_number;
    let view2="Today";
    let view3="Tomorrow";

    if(date_array.join("-") == today.join("-")){
      return view2;
    }
    else if(date_array.join("-") == tomorrow.join("-")){
      return view3;
    }
    else{
      return view1;
    }
 
  }

}
