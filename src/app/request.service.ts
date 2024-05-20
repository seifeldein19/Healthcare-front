import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private _HttpClient:HttpClient) { }


  requester(formData:object):Observable<any>
  {
   return this._HttpClient.post('http://localhost:5000/request',formData);
  }
}
