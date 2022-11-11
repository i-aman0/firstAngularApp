import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewserviceService {
  employees: any[];
  constructor() {
    this.employees=[
      {
        empcode: '001', name: 'Aman Khan'
      },
      {
        empcode: '002', name: 'Vaibhav Verma'
      }
    ];
  }
    display(){
      return 'Welcome to Angular Solutions';
    }
  }

