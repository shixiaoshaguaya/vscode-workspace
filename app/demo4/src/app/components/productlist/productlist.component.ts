import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonService } from "../../services/common.service";
@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.scss']
})
export class ProductlistComponent implements OnInit {
  // public products: any;
  // public proUrl = "http://goodest.com.cn:8080/opple/rest/products";

  // constructor(private http: HttpClient) { }

  // ngOnInit(): void {
  //   this.getProductsData();
  //   // console.log("this.products");
  //   // console.log(this.products);
  // }
  // getProductsData() {
  //   this.http.get(this.proUrl).subscribe((response: any) => {
  //     // console.log(response.data);
  //     this.products = response.data;
  //     // console.log(this.products);
  //   });
  // }

  public products: any[] = [];

  constructor(public commonService: CommonService) { }

  ngOnInit(): void {
    let api = "products";
    this.commonService.ajaxGet(api)
      .then((response: any) => this.products = response.data);//获取到的新的产品数据
  }

}
