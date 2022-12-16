import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-leaves',
  templateUrl: './view-leaves.component.html',
  styleUrls: ['./view-leaves.component.css']
})
export class ViewLeavesComponent {


  constructor(private api: ApiService, private route:Router) {
    api.Leaves().subscribe(
      (response: any) => {
        this.loading = false
        this.leaves = response
      }
    )
  }
  updateStatus = (id:any,empId:any, status:any, type:any,from:any,to:any,) => {
    let data: any = { 
      "id": id, 
      "empId": empId, 
      "leaveStatus": status, 
      "leaveType": type, 
      "fromDate": from, 
      "toDate": to 
    }
    this.api.manLeave(data).subscribe(
      (response:any)=>{
        if(response.status=="success"){
          if(status == 1){
            alert("Leave Approved")
          }else{
            alert("Leave Rejected")
          }
          window.location.reload()
        }else{
          alert("failed")
          window.location.reload() 
        }
        
      }
    )
  }
  leaves: any = []
  loading: boolean = true

}
