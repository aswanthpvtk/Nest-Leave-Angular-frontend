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

}
