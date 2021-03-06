import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { EmployeelistComponent } from './employeelist/employeelist.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { EditproductComponent } from './editproduct/editproduct.component';
import { FormsModule } from '@angular/forms';
import { ArithematicComponent } from './arithematic/arithematic.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    EmployeelistComponent,
    PageNotFoundComponent,
    AddproductComponent,
    EditproductComponent,
    ArithematicComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
