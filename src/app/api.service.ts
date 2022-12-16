import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }


  
  Empview=()=>
  {
    return this.http.get("http://localhost:8080/viewAllEmployee")
  }
  
  Empsearch=(dataToSend:any)=>
  {
    return this.http.post("http://localhost:8080/searchEmployee",dataToSend)
  }

  deleteData=(dataToSend:any)=>
  {
    return this.http.post("http://localhost:8080/deleteEmployee",dataToSend)
  }

  addemp=(dataToSend:any)=>
  {
    return this.http.post("http://localhost:8080/addEmployee",dataToSend)
  }

  addsecu=(dataToSend:any)=>
  {
    return this.http.post("http://localhost:8080/addSecurity",dataToSend)
  }

  emplogin=(dataToSend:any)=>
  {
    return this.http.post("http://localhost:8080/employeeLogin",dataToSend)

  }

  emppf=(dataToSend:any)=>
  {
    return this.http.post("http://localhost:8080/employeeProfile",dataToSend)

  }
  LeaveDet = (data:any)=>{
    return this.http.post("http://localhost:8080/getLeaveDetails",data)
  }

  leaveapply = (data:any)=>{
    return this.http.post("http://localhost:8080/applyLeave",data)
  }

  securityProfile = (data:any) =>{
    return this.http.post("http://localhost:8080/securityProfile", data)
  }

  Leaves = ()=>{
    return this.http.get("http://localhost:8080/getAllLeaves")
  }

  manLeave = (data:any)=>{
    console.log(data)
    return this.http.post("http://localhost:8080/updateLeaves", data)
  }

  securityLogin = (data:any)=>{
    return this.http.post("http://localhost:8080/securityLogin", data)
  }

  editEmployee = (data:any)=>{
    return this.http.post("http://localhost:8080/editEmployee", data)
  }
  
  getId = (data:any)=>{
    return this.http.post("http://localhost:8080/employeeProfile", data)
  }
  getSecEmpLogs = ()=>{
    return this.http.get("http://localhost:8080/viewSecEmpLog")
  }

  getSecVisLogs = ()=>{
    return this.http.get("http://localhost:8080/viewSecVisLog")
  }

  searchLogs = (data:any)=>{
    return this.http.post("http://localhost:8080/searchEmpLog",data)
  }

  searchVisLogs = (data:any)=>{
    return this.http.post("http://localhost:8080/searchVisLog",data)
  }
  

  

  
}
