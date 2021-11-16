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
     this.CustomerModels.push(this.CustomerModel);
    this.CustomerModel=new Customer();
    // if(this.CustomerModel.CustomerName===''){
    //   //this.CustomerModel.IsError=true;
    // }
    // else{
     
    //   console.log("else");
    // }
    
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

  SelectCustomer(_selected:Customer){
    this.CustomerModel=_selected;
  }
}
