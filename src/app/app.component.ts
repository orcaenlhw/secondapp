import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";


@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'secondapp';
  sales: any = [];

  

  constructor(private httpClient: HttpClient){}
  ngOnInit(){
    this.httpClient.get("assets/data/saleinvoice.json").subscribe(data =>{
      console.log(data);
      this.sales = data;
    })
  }
}