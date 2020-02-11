import { NgModule } from '@angular/core';
import { Routes,RouterModule  } from '@angular/router';
import { SalarySearchComponent } from './salary-search/salary-search.component';

const routes : Routes = [
    {path:'',component:SalarySearchComponent}
]

@NgModule({
    imports : [RouterModule.forChild(routes)],
    exports  : [RouterModule]
})

export class SalarySearchRoutingModule { }