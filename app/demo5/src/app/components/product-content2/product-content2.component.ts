import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-content2',
  templateUrl: './product-content2.component.html',
  styleUrls: ['./product-content2.component.scss']
})
export class ProductContent2Component implements OnInit {
  public id: string = '';
  public productname: string = '';

  constructor(public route: ActivatedRoute) { }

  ngOnInit(): void {
    // this.route.queryParamMap.subscribe(data=>{
    //   this.id=data.get("id");
    //   this.productname=data.get("productname");
    // })
    this.route.queryParams.subscribe(data => {
      this.id = data.id;
      this.productname = data.productname;
    })
  }

}
