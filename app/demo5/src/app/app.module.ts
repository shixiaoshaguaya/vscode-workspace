import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ProductComponent } from './components/product/product.component';
import { ProductContentComponent } from './components/product-content/product-content.component';
import { NewsComponent } from './components/news/news.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonService } from "./services/common.service";
import { ProductContent2Component } from './components/product-content2/product-content2.component';
import { Product2Component } from './components/product2/product2.component';
import { Product2ContentComponent } from './components/product2-content/product2-content.component';
import { Product2Content2Component } from './components/product2-content2/product2-content2.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductComponent,
    ProductContentComponent,
    NewsComponent,
    PageNotFoundComponent,
    ProductContent2Component,
    Product2Component,
    Product2ContentComponent,
    Product2Content2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [CommonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
