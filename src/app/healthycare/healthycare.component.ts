import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-healthycare',
  templateUrl: './healthycare.component.html',
  styleUrls: ['./healthycare.component.css']
})
export class HealthycareComponent implements OnInit {

  constructor(public _Router:Router) {


   }
   user()
  {
    this._Router.navigate(['login'])
  }
  hospital()
  {
    this._Router.navigate(['login-hospital'])
  }

  ngOnInit(): void {
  }

}
