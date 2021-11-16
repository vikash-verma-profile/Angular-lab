import { Component } from '@angular/core';
import {Customer} from './CustomerApp.model';

@Component({
  templateUrl: './CustomerApp.CustomerView.html'
})
export class CustomerComponent {
  title = 'CustomerApplication';
  CustomerModel=new Customer();
  CustomerModels:Array<Customer> =new Array<Customer>();

  AddCustomer()
  {
    this.CustomerModels.push(this.CustomerModel);
    this.CustomerModel=new Customer();
  }

  EditCustomer(customer:Customer){
    this.CustomerModel=customer;
  }
  DeleteCustomer(customer:Customer){
    this.CustomerModels=this.CustomerModels.filter(x=>x !=customer);
  }
  hasError(typeofvalidator:string,controlname:string):boolean
  {
      return this.CustomerModel.formCutomerGroup.controls[controlname].hasError(typeofvalidator);
  }
}
