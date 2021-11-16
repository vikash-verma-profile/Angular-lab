import { Component, Injector } from '@angular/core';
import { BaseLogger } from '../Utility/CustomerApp.Logger';
import {Customer} from './CustomerApp.model';

@Component({
  templateUrl: './CustomerApp.CustomerView.html'
})
export class CustomerComponent {

  LogObj:BaseLogger;
  constructor(_injector:Injector){
    this.LogObj=_injector.get("2");
    this.LogObj.Log();
  }
  title = 'CustomerApplication';
  CustomerModel=new Customer();
  CustomerModels:Array<Customer> =new Array<Customer>();

  AddCustomer()
  {
    if(this.CustomerModel.CustomerName===''){
      this.CustomerModel.IsError=true;
    }
    else{
      // this.CustomerModels.push(this.CustomerModel);
      // this.CustomerModel=new Customer();
      console.log("else");
    }
    
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
