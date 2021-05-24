import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
  public flag = true;
  public productList = [];//商品列表
  public keywords: any = '';//表单输入的关键词
  public page: any = 1;
  public config: any = {};//配置
  public hasInfiniteData: any = true;//是否有上拉框
  public subHeaderList: any[] = []; //二级导航列表
  public subHeaderSelected: any = 1; //选中的id
  public sort: any = '';//排序
  public historyList: any[] = [];//历史记录

  constructor(public common: CommonService, public nc: NavController) {
    this.subHeaderList = [
      {
        id: 1,
        title: "综合",
        fileds: "all",
        sort: -1  //排序   升序：price_1    {price:1}   降序：price_-1  {price:-1}
      },
      {
        id: 2,
        title: "销量",
        fileds: 'salecount',
        sort: -1
      },
      {
        id: 3,
        title: "价格",
        fileds: 'price',
        sort: -1
      }
    ]
  }

  ngOnInit() {
    this.subHeaderChange(2);
  }

  doBack() {
    this.nc.back();
  }

  doSearch() {
    console.log("准备开始查询");
  }

  subHeaderChange(id) {
    this.subHeaderSelected = id;
    this.sort = this.subHeaderList[id - 1].fileds + '_' + this.subHeaderList[id - 1].sort; //拼接排序字段
    this.page = 1; //重置分页数据
    this.productList = [] //重置商品数据
    this.hasInfiniteData = true; //开启上拉分页
    this.subHeaderList[id - 1].sort = this.subHeaderList[id - 1].sort * -1; //改变排列状态
    // this.content.scrollToTop(0); //回到顶部
    this.getProductList(null); //请求数据
  }

  getProductList(event) {
    if (this.sort) {
      var api = 'api/plist?search=' + this.keywords + "&page=" + this.page + "&sort=" + this.sort;
    } else {
      var api = "api/plist?search=" + this.keywords + "&page=" + this.page;
    }
    this.common.ajaxGet(api).then((respoense: any) => {
      this.productList = this.productList.concat(respoense.result);
      this.page++;
      event ? event.target.complere() : '';
      //判断是否数据
      if (respoense.result.length < 10) {
        this.hasInfiniteData = false; //把上拉分页禁用掉
      }
    })
  }
}
