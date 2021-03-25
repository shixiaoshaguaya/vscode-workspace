import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  //声明一个产品数据数组并初始化数据
  public productLst: any[] = [
    { "id": "p0001", "title": "小米手环", "price": 399, "pnum": 0, "pic": "p0001.jpg" },
    { "id": "p0001", "title": "小米手环", "price": 399, "pnum": -5, "pic": "p0001.jpg" },
    { "id": "p0001", "title": "小米手环", "price": 399, "pnum": 100, "pic": "p0001.jpg" },
    { "id": "p0001", "title": "小米手环", "price": 399, "pnum": 100, "pic": "p0001.jpg" }
  ];
  public title:string="产品列表展示";
  constructor() { 
    //也可以在类的构造方法中进行数据的初始化
    let i: number= 1;
    for (; i < 6; i++) {
      //往productLst数组存入元素
      this.productLst.push({
        "id": "p000" + i,
        "title": "小米手环",
        "price": 399,
        "pnum": 100,
        "pic": "p000" + i + ".jpg"
      });
    }

  }

  ngOnInit(): void {
  }

}
