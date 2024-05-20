import { Component, OnInit } from '@angular/core';
import { requestService } from '../requests.service';

@Component({
  selector: 'app-dashbard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  requests:any[]=[]
  first_name:any;
  constructor(_requestService:requestService) {
    this.first_name = localStorage.getItem('first_name')

    _requestService.getrequests().subscribe(
      (requests)=>this.requests=requests.hospital);

      console.log(this.requests)
   }



  ngOnInit(): void {



  }

}

