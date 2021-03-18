import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-six',
  templateUrl: './six.component.html',
  styleUrls: ['./six.component.scss']
})
export class SixComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  title="我的书城";
  h="<h5>这是一个 h5用HTML来解析</h5>";
  myname="product1";
  myid="p0001";
  myvalue="199.8";
  student={stuno:"10001", name:"黄启航",age :15};

  products=["风扇","手机","电视机","路由器"];
  pro1:any=["风扇",2345,true,"抽烟机"];

  stus=[{stuno:"10001", name:"黄启航",age :19},
  {stuno:"10002", name:"白启航",age :15},
  {stuno:"10003", name:"林启航",age :17},
  {stuno:"10004", name:"洪启航",age :12}];

  stus2=[{stuno:"10001", name:"黄启航",age :19,list:[{yuwen:90, shuxu:88,yiyu:96},{yuwen:90, shuxu:88,yiyu:96}]},
  {stuno:"10002", name:"白启航",age :15,list:[{yuwen:75, shuxu:77,yiyu:90}]},
  {stuno:"10003", name:"林启航",age :17,list:[{yuwen:88, shuxu:99,yiyu:86}]},
  {stuno:"10004", name:"洪启航",age :12,list:[{yuwen:95, shuxu:97,yiyu:76}]}];

}
