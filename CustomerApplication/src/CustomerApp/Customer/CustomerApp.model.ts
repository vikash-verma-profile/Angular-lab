import { NgForm,FormGroup,FormControl,Validators,FormBuilder } from "@angular/forms";

export class Customer{
    CustomerCode:string="";
    CustomerName:string="";
    CustomerAmount:number=0;
    formCutomerGroup: FormGroup;

    constructor(){
        var _builder=new FormBuilder();
        this.formCutomerGroup=_builder.group({});
        //control-->validations
        this.formCutomerGroup.addControl("CustomerNameControl",new FormControl('',Validators.required));
        
    }
}