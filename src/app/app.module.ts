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
import { AdmNavComponent } from './adm-nav/adm-nav.component';
import { SearchEmpComponent } from './search-emp/search-emp.component';
import { EmpDeleteComponent } from './emp-delete/emp-delete.component';
import { AddEmpComponent } from './add-emp/add-emp.component';
import { EmploginComponent } from './emplogin/emplogin.component';
import { AddSecurityComponent } from './add-security/add-security.component';
import { AddinfoComponent } from './addinfo/addinfo.component';
import { EmpinfoComponent } from './empinfo/empinfo.component';
import { EmpnavComponent } from './empnav/empnav.component';
import { LeaveapplyComponent } from './leaveapply/leaveapply.component';
import { SecurityLoginComponent } from './security-login/security-login.component';
import { SecurityProfileComponent } from './security-profile/security-profile.component';
import { SecNavbarComponent } from './sec-navbar/sec-navbar.component';
import { EditEmpComponent } from './edit-emp/edit-emp.component';
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
  {
    path:"se",
    component:SearchEmpComponent
  },
  {
    path:"de",
    component:EmpDeleteComponent
  },
  {
    path:"addemp",
    component:AddEmpComponent
  },
  {
    path:"addsec",
    component:AddSecurityComponent
  },
  {
    path:"epf",
    component:EmpinfoComponent
  },
  {
    path:"apl",
    component:LeaveapplyComponent
  },
  {
    path:"sl",
    component:SecurityLoginComponent
  },
  {
    path:"sf",
    component:SecurityProfileComponent
  },
  {
    path:"editemp",
    component:EditEmpComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    MainNavComponent,
    EmpLoginComponent,
    EmpviewComponent,
    AdmNavComponent,
    SearchEmpComponent,
    EmpDeleteComponent,
    AddEmpComponent,
    EmploginComponent,
    AddSecurityComponent,
    AddinfoComponent,
    EmpinfoComponent,
    EmpnavComponent,
    LeaveapplyComponent,
    SecurityLoginComponent,
    SecurityProfileComponent,
    SecNavbarComponent,
    EditEmpComponent
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
