import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-security-profile',
  templateUrl: './security-profile.component.html',
  styleUrls: ['./security-profile.component.css']
})
export class SecurityProfileComponent {



  data:any = {
    "id":localStorage.getItem("userInfo")
  }
  constructor(private api:ApiService){
      api.securityProfile(this.data).subscribe(
        (response:any)=>{
          this.security = response
        }
      )
  }
  security:any = []

}
