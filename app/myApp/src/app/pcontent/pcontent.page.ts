import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-pcontent',
  templateUrl: './pcontent.page.html',
  styleUrls: ['./pcontent.page.scss'],
})
export class PcontentPage implements OnInit {
  public config: any = {};
  public list: any = {};
  public imgurl: any;

  constructor(public common: CommonService, public AR: ActivatedRoute) {
    this.config = this.common.config;
    this.imgurl = this.common.config.domain + '/displayimage?filename=';
  }

  ngOnInit() {
    this.AR.queryParams.subscribe(
      (data: any) => {
        this.getProductData(data.id);
      }
    );
  }

  getProductData(id) {
    var api = '/pcontent?id=' + id;
    this.common.ajaxGet(api).then((res: any) => {
      this.list = res.data;
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
}
