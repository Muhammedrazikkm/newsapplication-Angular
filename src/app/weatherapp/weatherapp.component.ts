import { Component,OnInit } from '@angular/core';
import { NewsService } from '../services/news.service';

@Component({
  selector: 'app-weatherapp',
  templateUrl: './weatherapp.component.html',
  styleUrls: ['./weatherapp.component.css']
})
export class WeatherappComponent implements OnInit{
  cityname:string=''
  result:any
  constructor(private service:NewsService){

  }

  ngOnInit(): void {
  }
  getWeatherDetail(){
    console.log(this.cityname);
    this.service.weatherDetail(this.cityname).then(res=>res.json()).then(data=>this.result=data)
    
  }

}
