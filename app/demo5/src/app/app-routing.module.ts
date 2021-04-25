import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NewsComponent } from './components/news/news.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ProductContentComponent } from './components/product-content/product-content.component';
import { ProductComponent } from './components/product/product.component';
import { ProductContent2Component } from './components/product-content2/product-content2.component';
import { Product2Component } from './components/product2/product2.component';
import { Product2ContentComponent } from './components/product2-content/product2-content.component';
import { Product2Content2Component } from './components/product2-content2/product2-content2.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  {
    path: 'product', component: ProductComponent,
    children: [
      { path: 'productcontent/:id', component: ProductContentComponent },
      { path: 'productcontent', component: ProductContent2Component }
    ]
  },
  { path: 'news', component: NewsComponent },
  { path: 'productcontent/:id', component: ProductContentComponent },
  { path: 'productcontent2', component: ProductContent2Component },
  {
    path: 'product2', component: Product2Component,
    children: [
      { path: 'product2content/:_id', component: Product2ContentComponent },
      { path: 'product2content2', component: Product2Content2Component }
    ]
  },
  { path: 'product2content/:_id', component: Product2ContentComponent },
  { path: 'product2content2', component: Product2Content2Component },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
