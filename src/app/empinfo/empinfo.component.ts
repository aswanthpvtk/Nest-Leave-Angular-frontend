import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-empinfo',
  templateUrl: './empinfo.component.html',
  styleUrls: ['./empinfo.component.css']
})
export class EmpinfoComponent {

  empCode:any=""
  constructor(private api:ApiService){
    this.empCode=localStorage.getItem("userinfo")
    let data:any={"id":this.empCode}
    
    this.api.emppf(data).subscribe(
      (response:any)=>{
        console.log(response)
        this.data=response
      }
    )

  }

  data:any=[]

}
