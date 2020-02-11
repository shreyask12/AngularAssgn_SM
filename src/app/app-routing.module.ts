import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren : './salary-form/salary-form.module#SalaryFormModule'
  },
  {
    path: 'search',
    loadChildren : './search/search.module#SearchModule'
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
