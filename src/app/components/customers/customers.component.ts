import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent  {
 
  users: any[];
  constructor(private _studentService: CustomerService) {
      this.users = this._studentService.getCustomer();
  }
  

}
