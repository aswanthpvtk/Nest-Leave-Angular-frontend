import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-leaveapply',
  templateUrl: './leaveapply.component.html',
  styleUrls: ['./leaveapply.component.css']
})
export class LeaveapplyComponent {
  empId: any = ""
  empCode = ""
  from = ""
  to = ""
  remarks = ""
  type = ""
  constructor(private api:ApiService, private route:Router) {
    this.empId = localStorage.getItem("userInfo")
    api.LeaveDet({"id":this.empId}).subscribe(
      (response:any)=>{
        this.leaveDetails = response
      }
    )
  }

  applyLeave = () => {
    let data: any = {
      "empId": this.empId,
      "fromDate": this.from,
      "toDate": this.to,
      "remarks": this.remarks,
      "leaveType": this.type,
    }
    this.api.leaveapply(data).subscribe(
      (response:any)=>{
        if(response.status=="success"){
          alert("Leave Request Submitted Successfully")
          this.route.navigate(["/viewEmployeeLeave"])
          
        }else{
          alert("You don't have enough leaves")
        }
      }
    )
  }
  leaveDetails:any = []
}