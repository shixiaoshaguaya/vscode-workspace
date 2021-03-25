import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seven',
  templateUrl: './seven.component.html',
  styleUrls: ['./seven.component.scss']
})
export class SevenComponent implements OnInit {

  public productLst: any[] = [
    { "id": "p0001", "title": "小米手环", "price": 399, "pnum": 100, "pic": "p0001.jpg" },
    { "id": "p0002", "title": "手表", "price": 399, "pnum": 100, "pic": "p0002.jpg" },
    { "id": "p0003", "title": "电动晾衣架", "price": 399, "pnum": 100, "pic": "p0003.jpg" },
    { "id": "p0004", "title": "电动牙刷", "price": 399, "pnum": 100, "pic": "p0004.jpg" }
  ];

  constructor() {
    console.log("---7777777777777777777777777777---");

    for (let i = 5; i < 10; i++) {
      this.productLst.push(
        { "id": "p000" + i, "title": "小米手环" + i, "price": Math.round(Math.random() * 100), "pnum": Math.round(Math.random() * 100), "pic": "p000" + i + ".jpg" }
      );
    };
  }

  ngOnInit(): void {
    console.log("   7777777777777777777777777777   ");
  }

  imgurl="https://img.alicdn.com/imgextra/i3/1709365317/O1CN01zAmiVp1p9EQiflXnM_!!1709365317-0-daren.jpg_300x300.jpg";
}
