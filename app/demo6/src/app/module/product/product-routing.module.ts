import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductContentComponent } from './components/product-content/product-content.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductComponent } from './product.component';

const routes: Routes = [
  {
    path: '', component: ProductComponent,
    children: [
      { path: 'list', component: ProductListComponent },
      { path: 'details', component: ProductContentComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
