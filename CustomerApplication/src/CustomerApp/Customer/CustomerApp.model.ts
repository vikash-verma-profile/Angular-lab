import { NgForm,FormGroup,FormControl,Validators,FormBuilder } from "@angular/forms";

export class Customer{
    
    CustomerCode:string="";
    CustomerName:string="";
    CustomerAmount:number=0;
    formCutomerGroup: FormGroup;
    // IsError:boolean=false;

    constructor(){
        var _builder=new FormBuilder();
        this.formCutomerGroup=_builder.group({});
        //control-->validations
        this.formCutomerGroup.addControl("CustomerNameControl",new FormControl('',Validators.required));
        var validatoncollection=[];
        validatoncollection.push(Validators.required);
       // validatoncollection.push(Validators.pattern("^[0-9]$"));
        this.formCutomerGroup.addControl("CustomerCodeControl",new FormControl('',Validators.compose(validatoncollection)));
    }
}