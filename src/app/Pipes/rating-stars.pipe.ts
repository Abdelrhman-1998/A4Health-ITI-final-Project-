import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ratingStars'
})
export class RatingStarsPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]):any {
    let subarray=[];
    if(Number.isInteger(value)){
      let myclass="fa-solid fa-star";
      for(let i=1;i<=value;i++){
        subarray.push(myclass);
      }
    }
    else{
      let class1="fa-solid fa-star";
      let class2="fa-solid fa-star-half";
      for(let i=1;i<=Math.ceil(value);i++){
        if(i!=Math.ceil(value)){
          subarray.push(class1);
        }
        else{
          subarray.push(class2);
        }
    }}
    return subarray;
  }

}
