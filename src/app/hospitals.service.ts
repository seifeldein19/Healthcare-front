import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HospitalsService {

  constructor(private _HttpClient:HttpClient) {
    _HttpClient.get('')

   }

   getHospitals():Observable<any>
   {
    return this._HttpClient.get('http://localhost:5000/hosbital')
   }
}
