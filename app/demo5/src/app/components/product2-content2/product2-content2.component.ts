import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product2-content2',
  templateUrl: './product2-content2.component.html',
  styleUrls: ['./product2-content2.component.scss']
})
export class Product2Content2Component implements OnInit {
  public id: string = '';
  public title: string = '';
  public price: number = 0;
  public imgurl: string = 'http://jd.itying.com/';
  public pic: string = '';

  constructor(public route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(data => {
      this.id = data.id;
      this.title = data.title;
      this.price = data.price;
      this.pic = data.pic;
    })
  }

}
