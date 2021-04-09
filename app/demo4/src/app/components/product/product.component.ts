import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  public productLst: any[] = [];
  public product_id: string | undefined;
  public product_title: string | undefined;
  public product_price: number | undefined;
  public product_pnum: number | undefined;
  public title: string = "产品列表展示";
  //此处构造方法中使用参数属性
  //此处参数为一个服务类，则Angular会自动完成服务实例的依赖注
  constructor(public storage: StorageService) { }

  ngOnInit(): void {
    this.productLst = this.storage.get("productLst");
    //调用存储服务提供的方法获取本地缓存的产品数据
  }

  saveProduct(): void {
    let newId: string = this.storage.getNewProductId();
    let newProduct: any = {
      id: newId,
      title: this.product_title,
      price: this.product_price,
      pnum: this.product_pnum,
      pic: 'p0001.jpg'
    };
    this.productLst.push(newProduct);//讲新增产品加入产品列表
    this.storage.set('productLst', this.productLst);
    //使用最新产品列表来刷新缓存中的产品列表
  }

}
