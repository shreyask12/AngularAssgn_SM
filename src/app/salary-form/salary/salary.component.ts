import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SalaryformsService } from '../../salaryforms.service';

@Component({
  selector: 'app-salary',
  templateUrl: './salary.component.html',
  styleUrls: ['./salary.component.css']
})


export class SalaryComponent implements OnInit {

  salaryForm: FormGroup;

  userInfo : Array<Object> = [];

  showMsg : boolean = false;

  userinfofirst : any;
  
  numericNumberReg= '^-?[0-9]\\d*(\\.\\d{1,2})?$';

  constructor(private router:Router,private salaryservice : SalaryformsService) { 

  }

  ngOnInit() {
    
    this.salaryForm = new FormGroup({
      
      name : new FormControl('', Validators.required),
      email : new FormControl('', [Validators.required, Validators.pattern(/[^@]+@[^\.]+\..+/)]),
      salary : new FormControl('', [Validators.required,]),
      
    });
  }


  onSubmit() : void {  

    this.userInfo.push(this.salaryForm.value);

    

    this.salaryservice.setFormData(this.userInfo);

    this.showMsg = true;

    this.salaryForm.reset({ emitEvent: false });

    
    
  }

  onbtnClick() : void {

    localStorage.setItem('userInfo',JSON.stringify(this.userInfo));
    
    this.router.navigate(['search']);
    
  }

}
