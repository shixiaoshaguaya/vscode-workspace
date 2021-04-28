import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewsModule } from './module/news/news.module';
import { ProductModule } from './module/product/product.module';
import { UserModule } from './module/user/user.module';
import { HttpClientModule } from '@angular/common/http';
import { ApiModule } from './module/api/api.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProductModule,
    NewsModule,
    UserModule,
    ApiModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
