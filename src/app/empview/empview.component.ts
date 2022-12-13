import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-empview',
  templateUrl: './empview.component.html',
  styleUrls: ['./empview.component.css']
})
export class EmpviewComponent {
  
  constructor(private api:ApiService)
  {
   api.Empview().subscribe(
 
 
     (Response)=>
     {
       this.data=Response;
     }
   )
  }
 
 data:any = []
}
