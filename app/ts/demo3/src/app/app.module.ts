import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewsComponent } from './components/news/news.component';
import { ProductComponent } from './components/product/product.component';
import { FiveComponent } from './components/five/five.component';


@NgModule({
  declarations: [
    AppComponent,
    NewsComponent,
    ProductComponent,
    FiveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
