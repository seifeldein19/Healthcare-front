import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './login-hospitals.service';

@Injectable({
  providedIn: 'root'
})
export class requestService {
  first_name:any;

  constructor(private _HttpClient:HttpClient,public _AuthService:AuthService) {
    _HttpClient.get('')


  }

  getrequests():Observable<any>
  {
    this.first_name = localStorage.getItem('first_name')
    console.log(this.first_name)
   return this._HttpClient.get('http://localhost:5000/hosbitalreq/'+this.first_name)
  }

}
