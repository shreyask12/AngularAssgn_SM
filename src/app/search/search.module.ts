import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SalarySearchComponent } from './salary-search/salary-search.component';
import { SalarySearchRoutingModule } from './salary.routing.module';
import { ReactiveFormsModule } from '@angular/forms'
import { FilterSalaryPipe } from '../filter-salary.pipe';
import { MyCommonModule } from '../my-common/my-common.module';

@NgModule({
  declarations: [SalarySearchComponent,FilterSalaryPipe],
  imports: [
    CommonModule,
    SalarySearchRoutingModule,
    ReactiveFormsModule,
    MyCommonModule
  ],
  providers :[
    // SalaryformsService
  ],
  exports : [
    FilterSalaryPipe
  ]
})
export class SearchModule { }
