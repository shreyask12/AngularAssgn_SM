import { Component, OnInit, } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { SalaryformsService } from '../../salaryforms.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-salary-search',
  templateUrl: './salary-search.component.html',
  styleUrls: ['./salary-search.component.css']
})
export class SalarySearchComponent implements OnInit {

  Searchsalaryform : FormGroup;
  
  usersdata : any = [];
  showtable : boolean;
  rangeSelect ="";
  usersinfoservice : any;


  constructor(private salaryService : SalaryformsService,private router: Router) { 

    
  }

  ngOnInit() {

    
    this.Searchsalaryform = new FormGroup({
      search : new FormControl(),
      selectSalary : new FormControl(''),
    });


    this.usersinfoservice = this.salaryService.getFormData();
    // console.log(this.usersinfoservice);
// 
    if(this.usersinfoservice == undefined){
      this.router.navigate(['']);
    }

    this.usersdata =  this.usersinfoservice;
   
    // console.log(this.usersdata);
  
    this.usersdata.length > 0 ? this.showtable = true :  this.showtable = false;

  }

  onChange(e) {
    console.log(e.target.value);
    var f = this.Searchsalaryform.value.search;

  //   if(e.target.value == 'Greater than'){
  //     this.usersdata = this.usersdata.filter(function (el) {
  //         return el.salary > f;
  //     });
  //     console.log(this.usersdata);
  // }else{
  //   this.usersdata = this.usersdata.filter(function (el) {
  //     return el.salary < f;
  // });
  //   console.log(this.usersdata);
  // }

    // for(let i=0;i<this.usersdata.length;i++){
    //   if(e.target.value == 'Greater than'){
    //     if(this.usersdata[i].salary > f){

    //     }
    //   }

    // }
    

  }



}
