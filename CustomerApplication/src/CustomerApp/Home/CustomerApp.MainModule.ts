import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import { MainRoutes } from '../Routing/CustomerApp.MainRoutes';
import { BaseLogger, ConsoleLogger, DBLogger } from '../Utility/CustomerApp.Logger';
import { HomeComponent } from './CustomerApp.HomeComponent';
import { MasterPageComponent } from './CustomerApp.MasterPageComponent';


var providerscoll:any=[];

providerscoll.push({provide:"1",useClass:DBLogger});
providerscoll.push({provide:"2",useClass:ConsoleLogger});
//providerscoll.push({provider:BaseLogger,useClass:ConsoleLogger});
@NgModule({
  declarations: [
    MasterPageComponent,
    HomeComponent,
  ],
  imports: [
    RouterModule.forRoot(MainRoutes),
    BrowserModule,
    FormsModule
  ],
  providers: [providerscoll],
  bootstrap: [MasterPageComponent]
})
export class MainModule { }
