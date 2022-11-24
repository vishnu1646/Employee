import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { RouterModule, Routes } from '@angular/router';
import { AddingemployeeComponent } from './addingemployee/addingemployee.component';
import { AddempComponent } from './addemp/addemp.component';
import { SearchComponent } from './search/search.component';
import { DeleteComponent } from './delete/delete.component';

const myRoute: Routes = [
  {
    path: "",
    component: AdminloginComponent
  },
  {
    path: "Add",
    component: AddingemployeeComponent
  },
  {
    path: "Adding",
    component: AddempComponent
  },
  {
    path: "Search",
    component: SearchComponent
  },
  {
    path: "Delete",
    component: DeleteComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    AdminloginComponent,
    AddingemployeeComponent,
    AddempComponent,
    SearchComponent,
    DeleteComponent
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
