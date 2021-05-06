import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  public products: any[] = [];

  constructor() {
    for (let i = 1; i <= 9; i++) {
      this.products.push({ id: i, title: `精选产品${i}`, price: i * 100, img: `0${i}.jpg` });
    }
  }

}
