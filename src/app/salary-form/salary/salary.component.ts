import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-salary',
  templateUrl: './salary.component.html',
  styleUrls: ['./salary.component.css']
})
export class SalaryComponent implements OnInit {

  salaryForm: FormGroup;

  userInfo : Array<Object> = [];

  constructor(private router:Router) { 
    // localStorage.clear();
  }

  ngOnInit() {
    
    this.salaryForm = new FormGroup({
      
      name : new FormControl(),
      email : new FormControl(),
      salary : new FormControl(),

    });
  }


  onSubmit() : void {
    
    // console.log(this.salaryForm.value);

    this.userInfo.push(this.salaryForm.value);
    
    // console.log(this.userInfo);
    
    
  }

  onbtnClick() : void {

    localStorage.setItem('userInfo',JSON.stringify(this.userInfo));

    this.router.navigate(['search']);
    
  }

}
