import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.page.html',
  styleUrls: ['./productlist.page.scss'],
})
export class ProductlistPage implements OnInit {
  public productList: any[] = [];//产品详情数据
  public cid: Number;
  public config: any = {};
  public page: any = 1;

  constructor(public comm: CommonService, public AR: ActivatedRoute, public nc: NavController) {
    this.config = this.comm.config;
  }

  ngOnInit() {
    //获取get传值
    this.AR.queryParams.subscribe((data: any) => {
      this.cid = data.cid;
      this.getProductList(null);
    })
  }

  getProductList(event) {
    var api = 'api/plist?cid=' + this.cid + "&page=" + this.page;
    this.comm.ajaxGet(api).then((res: any) => {
      console.log(res);
      this.productList = this.productList.concat(res.result);
      this.page++;
      event ? event.target.complete() : '';
      if (res.result.length < 10) {
        event ? event.target.disabled = true : "";
      }
    })
  }
}
