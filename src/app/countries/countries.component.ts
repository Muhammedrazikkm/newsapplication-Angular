import { Component,OnInit } from '@angular/core';
import { NewsService } from '../services/news.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {
  country:string=''
  result:any
  constructor(private service:NewsService){

  }
  
  ngOnInit(): void {
    
  }
  getCountries(){
    console.log(this.country);
    this.service.getAllCountries(this.country).then(res=>res.json()).then(data=>this.result=data)

    

  }
}
