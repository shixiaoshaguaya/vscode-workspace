import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-product2',
  templateUrl: './product2.component.html',
  styleUrls: ['./product2.component.scss']
})
export class Product2Component implements OnInit {
  public products: any[] = [];

  constructor(public router: Router, public commonService: CommonService) { }

  ngOnInit(): void {
    let api = "plist?search=电脑&page=1&sort=salecount_-1";
    this.commonService.jdGet(api).then((response: any) => {
      this.products = response.result;
    });//获取到的新的产品数据
  }

  goProduct(id: string) {
    if (confirm("确定要查看该产品吗？")) {
      this.router.navigate(['/product2content', id]);
    }
  }
}
