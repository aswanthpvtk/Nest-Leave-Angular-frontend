import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { MainNavComponent } from './main-nav/main-nav.component';
import { EmpLoginComponent } from './emp-login/emp-login.component';
import {HttpClientModule} from '@angular/common/http';
import { EmpviewComponent } from './empview/empview.component';
const myRoute:Routes=[
  {
    path:"",
    component:AdminLoginComponent
  },
  {
    path:"u",
    component:EmpLoginComponent
  },
  {
    path:"ev",
    component:EmpviewComponent
  },
  // {
  //   path:"ts",
  //   component:AddTaskComponent
  // }
]
@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    MainNavComponent,
    EmpLoginComponent,
    EmpviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(myRoute),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
