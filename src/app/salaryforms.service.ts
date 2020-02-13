import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SalaryformsService {

  constructor() { }

  private formdata;

  setFormData(value){
    
    this.formdata = value;

  }
  getFormData(){

    return this.formdata;

  }

}
