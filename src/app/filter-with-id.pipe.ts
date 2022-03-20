import { Pipe, PipeTransform } from '@angular/core';
import { Review } from './Models/review';

@Pipe({
  name: 'filterWithId'
})
export class FilterWithIdPipe implements PipeTransform {

  transform(value: Review[] ,id: number):any{
      if(!value){return []}
      if(!id){return value}
     return value.filter(e=>e.id==id)
  }

}
