import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { RouterModule, Routes } from '@angular/router';
import { AddingemployeeComponent } from './addingemployee/addingemployee.component';

const myRoute:Routes=[
  {
    path:"",
    component:AdminloginComponent
  },
  {
    path:"Add",
    component:AddingemployeeComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    AdminloginComponent,
    AddingemployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
