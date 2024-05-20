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
    if(localStorage.getItem('hospitaltoken') != null){

      this.saveUserData();

    }
  }

  userdata = new BehaviorSubject(null);

  data :any;
  saveUserData()
  {
    let encodedUserData = JSON.stringify(localStorage.getItem('hospitaltoken'))
    console.log(encodedUserData)
     this.userdata.next( jwtDecode(encodedUserData));
     this.data = this.userdata.value;
     localStorage.setItem('first_name',this.data.first_name)
     console.log( this.data.first_name)
     console.log( this.userdata.value)


  }


  register(formData:object) :Observable<any>
  {
    return this._HttpClient.post(`http://localhost:5000/hosbital`,formData);
  }
  login(formData:object) :Observable<any>
  {
    return this._HttpClient.post(`http://localhost:5000/login`,formData);
  }

  logout()
  {
    localStorage.removeItem('hospitaltoken');
    this.userdata.next(null);
    this._Router.navigate(['login-hospital']);

  }
}
