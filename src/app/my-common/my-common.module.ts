import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DigitsOnlyDirective } from './digits-only.directive';

@NgModule({
  declarations: [DigitsOnlyDirective],
  imports: [
    CommonModule
  ],
  exports: [
    DigitsOnlyDirective
  ]
})
export class MyCommonModule { }
