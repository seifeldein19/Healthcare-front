import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private _HttpClient:HttpClient) { 
    _HttpClient.get('')
  }

  getNews():Observable<any>
  {
   return this._HttpClient.get('https://newsapi.org/v2/top-headlines?country=eg&category=health&apiKey=376afbce494642198ca468fb53e9e685')
  }

}