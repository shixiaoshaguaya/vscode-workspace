import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  public productLst: any[] = [
    { "id": "p0001", "title": "小米手环", "price": 399, "pnum": 100, "pic": "p0001.jpg" },
    { "id": "p0002", "title": "手表", "price": 399, "pnum": 100, "pic": "p0002.jpg" },
    { "id": "p0003", "title": "电动晾衣架", "price": 399, "pnum": 100, "pic": "p0003.jpg" },
    { "id": "p0004", "title": "电动牙刷", "price": 399, "pnum": 100, "pic": "p0004.jpg" }
  ];

  constructor() { 
    for (let i = 5; i < 10; i++) {
      this.productLst.push(
        { "id": "p000" + i, "title": "小米手环" + i, "price": Math.round(Math.random() * 100), "pnum": Math.round(Math.random() * 100), "pic": "p000" + i + ".jpg" }
      );
    };
  }

  ngOnInit(): void {
  }

}
