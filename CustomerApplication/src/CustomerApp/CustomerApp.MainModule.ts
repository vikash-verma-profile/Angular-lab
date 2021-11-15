import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import { MainRoutes } from './Routing/CustomerApp.MainRoutes';
import { CustomerComponent } from './Customer/CustomerApp.CustomerComponent';
import { HomeComponent } from './Home/CustomerApp.HomeComponent';
import { MasterPageComponent } from './Home/CustomerApp.MasterPageComponent';
import { SupplierComponent } from './Supplier/CustomerApp.SupplierComponent';

@NgModule({
  declarations: [
    CustomerComponent,
    MasterPageComponent,
    HomeComponent,
    SupplierComponent
  ],
  imports: [
    RouterModule.forRoot(MainRoutes),
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [MasterPageComponent]
})
export class MainModule { }
