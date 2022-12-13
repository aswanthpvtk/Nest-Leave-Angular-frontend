import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-emp-login',
  templateUrl: './emp-login.component.html',
  styleUrls: ['./emp-login.component.css']
})
export class EmpLoginComponent {

  username=""
  password=""

  constructor(private api: ApiService, private route: Router) { }


  readValues=()=>
  {
    let data:any={"username":this.username,"password":this.password}
    console.log(data)

    this.api.emplogin(data).subscribe(
      (response: any) => {
        this.username = ""
        this.password = ""
        if (response.status == "success"){
          let empid=response.userId
          console.log(empid)
          localStorage.setItem("userinfo",empid)
          
          this.route.navigate(["/epf"])
        } else {
          alert(response.message)
        }
      }
    )
  }



}
