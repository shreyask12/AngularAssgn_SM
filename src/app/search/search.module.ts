import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SalarySearchComponent } from './salary-search/salary-search.component';
import { SalarySearchRoutingModule } from './salary.routing.module';
import { ReactiveFormsModule } from '@angular/forms'

@NgModule({
  declarations: [SalarySearchComponent],
  imports: [
    CommonModule,
    SalarySearchRoutingModule,
    ReactiveFormsModule
  ]
})
export class SearchModule { }
