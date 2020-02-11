import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SalaryComponent } from './salary/salary.component';
import { SalaryRoutingModule } from './salary/salary.routing.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [SalaryComponent],
  imports: [
    CommonModule,
    SalaryRoutingModule,
    ReactiveFormsModule
  ],
  bootstrap: [SalaryComponent]
})
export class SalaryFormModule { }
