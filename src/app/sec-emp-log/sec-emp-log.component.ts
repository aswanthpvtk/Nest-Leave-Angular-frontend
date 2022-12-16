import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-sec-emp-log',
  templateUrl: './sec-emp-log.component.html',
  styleUrls: ['./sec-emp-log.component.css']
})
export class SecEmpLogComponent {
  date=""
  constructor(private api:ApiService){
    api.getSecEmpLogs().subscribe(
      (response:any)=>{
        console.log(response)
        this.loading = false
        this.secemplogs = response
      }
    )
  }

  searchLog = ()=>{
    this.api.searchLogs({"date":this.date}).subscribe(
      (response:any)=>{
        this.searchData = response
      }
    )
  }

  secemplogs:any = []
  loading:boolean = true
  searchData:any = []

}
