import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-emp',
  templateUrl: './add-emp.component.html',
  styleUrls: ['./add-emp.component.css']
})
export class AddEmpComponent {



  constructor(private api:ApiService){}
  empCode=""
  empName=""
  empEmail=""
  empPhone=""
  empDesignation=""
  username=""
  password=""

  readValues = ()=>{
    let data:any = {
      "empCode": this.empCode,
      "name": this.empName,
      "email": this.empEmail,
      "phone": this.empPhone,
      "designation": this.empDesignation,
      "username": this.username,
      "password": this.password
   }
   this.api.addemp(data).subscribe(
    (response:any)=>{
      if(response.status=="success"){
        alert("Employee Added Successfully")
      }else{
        alert("Error in adding employee")
      }
    }
   )
  }
}
