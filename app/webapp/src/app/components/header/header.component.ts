import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
 public logotitle:string="黎明书城";
  public menutitles:string[]=['首页','产品中心','用户中心'];
  constructor() { }

  ngOnInit(): void {
  }

}
