import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { FormsModule } from '@angular/forms';
import { Routes } from '@angular/router';
import { MainNavComponent } from './main-nav/main-nav.component';
const myRoute:Routes=[
  {
    path:"",
    component:AdminLoginComponent
  },
  // {
  //   path:"ul",
  //   component:EmpLoginComponent
  // },
  // {
  //   path:"ur",
  //   component:EmpRegisComponent
  // },
  // {
  //   path:"ts",
  //   component:AddTaskComponent
  // }
]
@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    MainNavComponent
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
