import { Component, OnInit, ɵConsole } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';

@Component({
  selector: 'app-salary-search',
  templateUrl: './salary-search.component.html',
  styleUrls: ['./salary-search.component.css']
})
export class SalarySearchComponent implements OnInit {

  Searchsalaryform : FormGroup;
  
  usersdata : any = [];

  constructor() { 

    this.usersdata = JSON.parse(localStorage.getItem('userInfo'));
  }

  ngOnInit() {

    this.Searchsalaryform = new FormGroup({
      search : new FormControl(),
      selectfilter : new FormControl(),
    });
    console.log(this.usersdata);

  }

}
