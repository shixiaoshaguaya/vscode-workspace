import { Component, OnInit } from '@angular/core';
import { CommonService } from "../services/common.service";
import { ActivatedRoute } from "@angular/router";
import { StorageService } from '../services/storage.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-pcontent',
  templateUrl: './pcontent.page.html',
  styleUrls: ['./pcontent.page.scss'],
})
export class PcontentPage implements OnInit {
  public tab: any = "list";//控制开关
  public list: any = {};//产品详情数据
  public config: any = {};
  public cartNum: number = 0;//购物车产品数量

  constructor(public comm: CommonService, public AR: ActivatedRoute, public storage: StorageService, public cartService: CartService) { this.config = this.comm.config; }

  ngOnInit() {
    this.AR.queryParams.subscribe(
      (data: any) => {
        this.getProductData(data.id);
      }
    );

    //获取底部购物车数量
    var cartList = this.storage.get('cartList');
    if (cartList) {
      this.cartNum = this.cartService.getCartNum(cartList);
    }
  }

  getProductData(id) {
    var api = 'api/pcontent?id=' + id;
    this.comm.ajaxGet(api).then((res: any) => {
      this.list = res.result;
    });
  }

  //将用户选择的产品属性CSS样式标识为"Active"
  changeAttr(e) {
    console.log(e.srcElement.nodeName);
    if (e.srcElement.nodeName == 'SPAN') {
      var el = e.srcElement; //获取当前点击的span DOM节点
      var parent = el.parentNode;//获取当前节点的父亲节点 
      var attrChildren = parent.children; //通父亲节点找到孩子节点 
      for (var i = 0; i < attrChildren.length; i++) {//让所有的子节点去active class
        attrChildren[i].className = '';
      }
      el.className = "active"; //给当前dom节点加一个active的 class
    }
  }
  //购买数量，初始化为1
  public num: any = 1;
  //增加数量
  incNum() {
    this.num += 1;
  }
  // 减少数量
  decNum() {
    if (this.num > 1) {
      this.num -= 1;
    }
  }

  //加入购物车
  addCart() {
    var product_title = this.list['title'];
    var product_id = this.list['_id'];
    var product_pic = this.list['pic'];
    var product_price = this.list['price'];
    var product_count = this.num;  /*商品数量*/
    var product_attrs: any = '';
    var spanActive = document.querySelectorAll('#myAttr .active');
    for (var i = 0; i < spanActive.length; i++) {
      if (i == 0) {
        product_attrs += spanActive[i].innerHTML;
      } else {
        product_attrs += "　" + spanActive[i].innerHTML;
      }
    }
    var productJson = {
      product_title,
      product_id,
      product_pic,
      product_price,
      product_count,
      product_attrs,
      checked: true
    }
    var cartList = this.storage.get('cartList');
    if (cartList && cartList.length > 0) {
      //判断购物车有没有当前数据
      if (this.cartService.hasData(cartList, productJson)) {
        for (var i = 0; i < cartList.length; i++) {
          if (cartList[i].product_id == productJson.product_id) {
            cartList[i].product_count += productJson.product_count;
          }
        }
      } else {
        cartList.push(productJson);
      }
      this.storage.set('cartList', cartList);
    } else {
      var tempArr: any[] = [];
      tempArr.push(productJson);
      this.storage.set('cartList', tempArr);
    }
    //修改底部购物车数量
    this.cartNum += productJson.product_count;
  }
}
