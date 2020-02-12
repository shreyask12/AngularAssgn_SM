import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SalaryformsService } from './salaryforms.service';
import { MyCommonModule } from './my-common/my-common.module';
// import { DigitsOnlyDirective } from './my-common/digits-only.directive'
// import { NumbersonlyDirective } from './numbersonly.directive';
// import { FilterSalaryPipe } from './filter-salary.pipe';



// import bootstrap from 'bootstrap';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MyCommonModule
  ],
  providers: [
    SalaryformsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
