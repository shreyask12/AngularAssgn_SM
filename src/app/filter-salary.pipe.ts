import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterSalary'
  
})
export class FilterSalaryPipe implements PipeTransform {

  transform(value: any, selectedvalue?: any,): any {
    // if(selectedvalue != ""){
      // if(selectedvalue == 'Greater than'){
      //   // return value.filter(item => item.salary > salary);
      //   let result = value.filter(item => item.salary > salary);
      //   console.log(result);
      //   return result;
      // }
      // else if(selectedvalue == 'Less than'){
      //   let result = value.filter(item => item.salary < salary);
      //   console.log(result);
      //   return result;
      // }else{
      //   return value;
      // }
    // }
    
  }
  
}
