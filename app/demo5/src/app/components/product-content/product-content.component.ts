import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonService } from '../../services/common.service'

@Component({
  selector: 'app-product-content',
  templateUrl: './product-content.component.html',
  styleUrls: ['./product-content.component.scss']
})
export class ProductContentComponent implements OnInit {

  public product: any;
  public id: string = '';

  constructor(public route: ActivatedRoute, public commonService: CommonService) { }

  ngOnInit(): void {
    this.route.params.subscribe(data => this.id = data.id);
    let api = "products/id/" + this.id;
    this.commonService.ajaxGet(api).then((response: any) => {
      this.product = response.data[0];
    });//获取到的新的产品数据
  }

}
