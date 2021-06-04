import { Component } from '@angular/core';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  public config: any = {};//配置信息
  public products: any = [];
  public imgurl: any;

  constructor(public common: CommonService) {
    this.config = this.common.config;
    this.imgurl = this.common.config.domain + '/displayimage?filename=';
  }

  ngOnInit(): void {
    this.getProductList();
  }

  getProductList() {
    var api = "/products";
    this.common.ajaxGet(api).then((res: any) => {
      this.products = res.data;
    })
  }
}
