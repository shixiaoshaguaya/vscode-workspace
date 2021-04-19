import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-product2-content',
  templateUrl: './product2-content.component.html',
  styleUrls: ['./product2-content.component.scss']
})
export class Product2ContentComponent implements OnInit {

  public product: any;
  public id: string = '';
  public imgurl: string = "";

  constructor(public route: ActivatedRoute, public commonService: CommonService) { }

  ngOnInit(): void {
    this.route.params.subscribe(data => this.id = data._id);
    let api = "pcontent?id=" + this.id;
    this.imgurl = this.commonService.config.jindongimg;
    this.commonService.jdGet(api).then((response: any) => {
      this.product = response.result;
    });//获取到的新的产品数据
  }

}
