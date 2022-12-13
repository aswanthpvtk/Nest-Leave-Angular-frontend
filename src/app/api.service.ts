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

  
}
