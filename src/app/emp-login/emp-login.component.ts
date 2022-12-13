import { Component } from '@angular/core';

@Component({
  selector: 'app-emp-login',
  templateUrl: './emp-login.component.html',
  styleUrls: ['./emp-login.component.css']
})
export class EmpLoginComponent {

  email=""
  psw=""

  // constructor(private api: ApiService, private route: Router) { }


  readValues=()=>
  {
    let data:any={"email":this.email,"psw":this.psw}
    console.log(data)

    // this.api.userLogin(data).subscribe(
    //   (response: any) => {
    //     this.email = ""
    //     this.psw = ""
    //     if (response.status == "success"){
    //       let empid=response.userId
    //       console.log(empid)
    //       localStorage.setItem("userinfo",empid)
          
    //       this.route.navigate(["/uf"])
    //     } else {
    //       alert(response.message)
    //     }
    //   }
    // )
  }



}
