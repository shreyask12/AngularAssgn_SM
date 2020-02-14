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

  salaryForm : FormGroup;
  
  temparray : Array<Object> = [];

  getarray :Array<Object> = [];

  showMsg : boolean = false;
  showAlert : boolean = false;
  
  numericNumberReg= '^-?[0-9]\\d*(\\.\\d{1,2})?$';

  constructor(private router:Router,private salaryservice : SalaryformsService) { 

  }

  ngOnInit() {

     this.getarray = this.salaryservice.getFormData();

     if(this.getarray == undefined){
      localStorage.clear();
     }else{
      this.temparray = this.getarray;
     }

  //  console.log(this.getarray);

    
    this.salaryForm = new FormGroup({
      
      name : new FormControl('', Validators.required),
      email : new FormControl('', [Validators.required, Validators.pattern(/[^@]+@[^\.]+\..+/)]),
      salary : new FormControl('', [Validators.required]),
      
    });
  }


  onSubmit() : void {  

    if(this.getarray == undefined){

      localStorage.clear();
      this.temparray.push(this.salaryForm.value);
  
    }else{
      this.temparray = this.getarray;
      this.temparray.push(this.salaryForm.value);
      
    }

    
    this.salaryservice.setFormData(this.temparray);
    localStorage.setItem('userInfo',JSON.stringify(this.temparray));
    
    this.showMsg = true;
    this.showAlert = false;

    this.salaryForm.reset({ emitEvent: false });

  }

  onbtnClick() : void {
 
  if(this.temparray.length == 0){
    if(this.salaryForm.valid){
      this.showAlert = false;
      this.showMsg = false;
      this.router.navigate(['/search']);
     
    }else{
      this.showAlert = true;
    }
  }else{
    this.router.navigate(['/search']);
   
  }
  

    
    
    
    
  }

}
