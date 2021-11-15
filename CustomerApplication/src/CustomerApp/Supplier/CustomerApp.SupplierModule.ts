import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule} from '@angular/router';
import { SupplierRoutes } from '../Routing/CustomerApp.SupplierRoutes';
import { SupplierComponent } from './CustomerApp.SupplierComponent';

@NgModule({
  declarations: [
    SupplierComponent
  ],
  imports: [
    RouterModule.forChild(SupplierRoutes),
    CommonModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [SupplierComponent]
})
export class SupplierModule { }
