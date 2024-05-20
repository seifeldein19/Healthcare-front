import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';
import { BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _HttpClient:HttpClient,private _Router:Router) { 
    if(localStorage.getItem('usertoken') != null){

      this.saveUserData();

    }
  }

  userdata = new BehaviorSubject(null);

  saveUserData()
  {
    let encodedUserData = JSON.stringify(localStorage.getItem('usertoken'))
    console.log(encodedUserData)
     this.userdata.next( jwtDecode(encodedUserData));
     console.log(this.userdata)
  }
  register(formData:object) :Observable<any>
  {
    return this._HttpClient.post(`http://localhost:5000/users`,formData);
  }
  login(formData:object) :Observable<any>
  {
    return this._HttpClient.post(`http://localhost:5000/signin`,formData);
  }

  logout()
  {
    localStorage.removeItem('usertoken');
    this.userdata.next(null);
    this._Router.navigate(['login']);

  }
}
