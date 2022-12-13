import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-emp-delete',
  templateUrl: './emp-delete.component.html',
  styleUrls: ['./emp-delete.component.css']
})
export class EmpDeleteComponent {

  name=""
  searchData:any=""
  constructor(private api:ApiService){}
  readValues=()=>
  {
    let data:any={"name":this.name}
    console.log(data)
    this.api.Empsearch(data).subscribe(
      (response:any)=>{
        console.log(response)
        if(response.length == 0){
          alert("Invalid Employee Code")
        }else{
          this.searchData=response
        }
      }
    )
  }

  deleteClick = (id: any) => {
    let data: any = {
      "name": this.name
    }
    this.api.deleteData(data).subscribe(
      (response: any) => {
        if (response.satus == "success") {
          alert("Employee Deleted")
        } else {
          alert("Error in deletion")
        }
      }
    )
  }
}
