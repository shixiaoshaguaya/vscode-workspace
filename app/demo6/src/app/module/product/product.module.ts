import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductContentComponent } from './components/product-content/product-content.component';
import { SearchComponent } from './search/search.component';
import { FormsModule } from '@angular/forms';
import { TodolistComponent } from './todolist/todolist.component';


@NgModule({
  declarations: [
    ProductComponent,
    ProductListComponent,
    ProductContentComponent,
    SearchComponent,
    TodolistComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    FormsModule
  ],
  exports: [
    ProductComponent
  ]
})
export class ProductModule { }
