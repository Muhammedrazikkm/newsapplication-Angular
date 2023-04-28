import { Component ,OnInit} from '@angular/core';
import { NewsService } from '../services/news.service';

@Component({
  selector: 'app-currency-xconverter',
  templateUrl: './currency-xconverter.component.html',
  styleUrls: ['./currency-xconverter.component.css']
})
export class CurrencyXconverterComponent implements OnInit{
  currency:any
  currencyCode:string[]=[]
  fromCode:string=""
  toCode:string=""
  amount:number=0
  result:number=0
  constructor(private service:NewsService){

  }
  
  ngOnInit(): void {
    this.service.exchangeRates().then(res=>res.json()).then(data=>{
      this.currency=data.conversion_rates
      for(let code in this.currency){
        this.currencyCode.push(code)
      }
      console.log(this.currencyCode);
      
    })
  }
  convert(){
    console.log(this.fromCode);
    console.log(this.toCode);
    console.log(this.amount);
    
    let toCodeRate=this.currency[this.toCode]
    let fromCodeRate=this.currency[this.fromCode]
    this.result=(this.amount/fromCodeRate)*toCodeRate
    console.log(this.result);
    
    
  }

}
