import { Component, OnInit } from '@angular/core';
import { NewsService } from '../services/news.service';

@Component({
  selector: 'app-newslist',
  templateUrl: './newslist.component.html',
  styleUrls: ['./newslist.component.css']
})
export class NewslistComponent implements OnInit{
  constructor(private service:NewsService){

  }
  news:any
  ngOnInit(): void {

    this.news=this.service.getAllNews().articles
  }

}
