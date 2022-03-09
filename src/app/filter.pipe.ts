import { Pipe, PipeTransform } from '@angular/core';
import { Doctor } from './Models/doctor';
import { Review } from './Models/review';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any[], searchResult: string):any  {
    if(!value || !searchResult){
      return value
    }
    return value.filter((val)=>{
      val.message.toLowerCase().indexOf(searchResult.toLowerCase()) !== -1})
  }

}
