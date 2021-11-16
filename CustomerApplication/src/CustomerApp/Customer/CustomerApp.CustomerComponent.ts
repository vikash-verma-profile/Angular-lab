import { Component, Injector } from '@angular/core';
import { BaseLogger } from '../Utility/CustomerApp.Logger';
import {Customer} from './CustomerApp.model';
import {HttpClient} from '@angular/common/http';

@Component({
  templateUrl: './CustomerApp.CustomerView.html'
})
export class CustomerComponent {

  LogObj:BaseLogger;
  constructor(_injector:Injector,public http:HttpClient){
    this.LogObj=_injector.get("2");
    this.LogObj.Log();
  }
  title = 'CustomerApplication';
  CustomerModel=new Customer();
  CustomerModels:Array<Customer> =new Array<Customer>();


  GetFromServer(){
    this.http.get("http://localhost:3000/Customers").
    subscribe(res=>this.SuccessGet(res),res=>this.ErrorGet(res));
  }
  ErrorGet(res:any){
    console.log(res);
  }
  SuccessGet(res:any){
  this.CustomerModels=res;
  }
  PosttoServer(){

    var cust:any={};
    cust.CustomerCode=this.CustomerModel.CustomerCode;
    cust.CustomerName=this.CustomerModel.CustomerName;
    cust.CustomerAmount=this.CustomerModel.CustomerAmount;
    //http://localhost:3000/Customers
      this.http.post("http://localhost:3000/Customers",cust).
      subscribe(res=>this.Success(res),res=>this.Error(res));
  }
  Error(res:any){
    console.log(res);
  }
  Success(res:any){
   this.GetFromServer();
  }
  AddCustomer()
  {
    this.PosttoServer();
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
