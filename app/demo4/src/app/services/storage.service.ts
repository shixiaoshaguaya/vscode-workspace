import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() {
    let productLst: any[] = [];
    productLst = this.get('productLst'); //默认先从本地获取数据
    if (productLst == null) {
      productLst = [];
      for (var i = 1; i <= 9; i++) {
        productLst.push({
          id: 'T' + ('0000' + i).substr(-4),
          title: '产品AAA名称',
          price: 100 * i,
          pnum: 100,
          pic: `p000${i}.jpg`
        });
      }
      this.set('productLst', productLst);
    }
  }

  //向本地缓存LoclStorage存入项目
  set(key: any, value: any) {
    localStorage.setItem(key, JSON.stringify(value));
    //缓存key:value格式的，且value为字符串格式，所以如果是对象需要进行序列化操作
  }

  //从本地缓存LoclStorage读取项目
  get(key: any) {
    return JSON.parse(localStorage.getItem(key) as string);
    //读取缓存的项目，且将字符串格式的value值反序列化为对象
  }

  getNewProductId() {
    let currentId: string;
    let productLst: any[] = this.get('productLst');
    if (productLst == null) {
      currentId = 'T0001';
    } else {
      currentId = productLst[productLst.length - 1].id;
      let maxId: number = Number.parseInt(currentId.substr(-4));
      maxId = maxId + 1;
      currentId = 'T' + ('AAAA' + maxId).substr(-4);
    } return currentId;
  }

}
