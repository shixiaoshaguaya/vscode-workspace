import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '../../services/common.service'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  public products: any[] = [];

  constructor(public router: Router, public commonService: CommonService) { }

  ngOnInit(): void {
    let api = "products";
    this.commonService.ajaxGet(api).then((response: any) => this.products = response.data);//获取到的新的产品数据
  }

  goProduct(id: string) {
    if (confirm("确定要查看该产品吗？")) {
      this.router.navigate(['/productcontent', id]);
    }
  }
}
