import { Component, ViewChild } from '@angular/core';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  public config: any = {};//配置信息
  public focusList: any[] = [];//轮播图列表
  public products: any[] = [];
  //猜你喜欢
  public hotList: any[] = [];
  public hotListWidth: any = 400;

  constructor(public common: CommonService) {
    // for (let i = 1; i <= 9; i++) {
    //   this.products.push({ id: i, title: `精选产品${i}`, price: i * 100, img: `0${i}.jpg` });
    // }
    this.config = this.common.config;
  }

  //获取商品列表
  getProductList() {
    var api = "api/plist?is_best=1";
    this.common.ajaxGet(api).then((res: any) => {
      this.products = res.result;
    }
    );
  }

  //获取轮播图的数据
  getFocusData() {
    var api = "api/focus";
    this.common.ajaxGet(api).then((response: any) => {
      this.focusList = response.result;
    })
  }

  //初始化的生命周期函数
  ngOnInit(): void {
    this.getFocusData();
    this.getHotData();
    this.getProductList();
  }

  @ViewChild('slide1', null) slide1;
  //轮播图的属性
  public slidesOpts = {
    speed: 400, autoplay: {
      delay: 2000,
    }, loop: true
  }

  //手动滑动完成
  slideTouchEnd() {
    this.slide1.startAutoplay();
  }

  //获取热门（猜你喜欢）商品
  getHotData() {
    var api = "api/plist?is_hot=1";
    this.common.ajaxGet(api).then((response: any) => {
      this.hotList = response.result;
      //计算hotListWidth的宽度
      this.hotListWidth = this.hotList.length * 9 + 'rem';
    })
  }
}
