import { Pipe, PipeTransform, Input } from '@angular/core';

@Pipe({
  name: 'filterSalary',
  // pure : true,
})


export class FilterSalaryPipe implements PipeTransform {
  result = [];
  transform(value: any, selectedvalue?: any,salary ?: any): any {
        
        return this.result = selectedvalue == 'Greater than' ? value.filter(item => Number(item.salary) > Number(salary)) : (selectedvalue == '' ? value : value.filter(item => Number(item.salary) < Number(salary)));
    
  }
  
}
