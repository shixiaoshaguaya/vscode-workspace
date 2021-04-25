import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductContentComponent } from './components/product-content/product-content.component';


@NgModule({
  declarations: [
    ProductComponent,
    ProductListComponent,
    ProductContentComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule
  ],
  exports: [
    ProductComponent
  ]
})
export class ProductModule { }
