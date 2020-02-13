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
  
  usersdata : Array<Object> = [];
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

    this.usersinfoservice = JSON.parse(localStorage.getItem('userInfo'));
    
    
    // console.log(this.usersinfoservice);
    if(this.usersinfoservice == undefined){
      this.router.navigate(['']);
    }

    this.usersdata =  this.usersinfoservice;
   
  
  
  

  }

}
