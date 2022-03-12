import { Pipe, PipeTransform } from '@angular/core';
import { Doctor } from './Models/doctor';
import { Review } from './Models/review';
import { DoctorService } from './Services/doctor.service';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
 doctor:Doctor[]=[];
 docs:any=[]
 private docServices!:DoctorService;
  transform(value: Review[] ,searchResultn: number):any{
    if(!value){return []}
    if(!searchResultn){return value}
   return value.filter(e=>e.doctor_id==searchResultn)
    
  }

}
