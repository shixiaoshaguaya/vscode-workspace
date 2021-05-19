import { Component, OnInit } from '@angular/core';
import { $ } from 'protractor';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  public config: any = {};
  public lCateList: any[] = [];//存储一级分类列表数据
  public rCateList: any[] = []; //存储二级分类列表数据
  public selectedId: any = "";//选中的id

  constructor(public comm: CommonService) {
    this.config = this.comm.config;
  }

  ngOnInit() {
    this.getLeftCateData();
  }

  getLeftCateData() {
    var api = "api/pcate";
    this.comm.ajaxGet(api).then((res: any) => {
      this.lCateList = res.result;
      this.getRightCateData(this.lCateList[0]._id);
    })
  }

  getRightCateData(pid) {
    var api = "api/pcate?pid=" + pid;
    this.comm.ajaxGet(api).then((res: any) => {
      this.rCateList = res.result;
    })
    // $("ion-item").toggleClass("active");
  }
}
