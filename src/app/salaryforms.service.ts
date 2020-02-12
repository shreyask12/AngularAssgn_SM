import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SalaryformsService {

  constructor() { }

  formdata;



  setFormData(value){
    
    this.formdata = value;

  }
  getFormData(){

    return this.formdata;

  }

}
