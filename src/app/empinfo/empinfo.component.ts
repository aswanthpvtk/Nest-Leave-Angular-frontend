import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-empinfo',
  templateUrl: './empinfo.component.html',
  styleUrls: ['./empinfo.component.css']
})
export class EmpinfoComponent {

  data:any = {
    "id":localStorage.getItem("userInfo")
  }
  constructor(private api:ApiService){
      api.emppf(this.data).subscribe(
        (response:any)=>{
          console.log(localStorage.getItem("usrInfo"))
          console.log(response)
          this.employee = response
        }
      )
  }
  employee:any = []
  }

  

