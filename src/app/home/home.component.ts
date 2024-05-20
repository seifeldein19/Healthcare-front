import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  news:any[]=[];

  constructor(_NewsService:NewsService) {
    _NewsService.getNews().subscribe(
      (news)=>this.news=news.articles);
   }

  ngOnInit(): void {
  }

}
