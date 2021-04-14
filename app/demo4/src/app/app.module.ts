import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SixComponent } from './components/six/six.component';
import { SevenComponent } from './components/seven/seven.component';
import { ProductsComponent } from './components/products/products.component';
import { LoginComponent } from './components/login/login.component';
import { StorageService } from "./services/storage.service";
import { ProductComponent } from './components/product/product.component';
import { ProductlistComponent } from './components/productlist/productlist.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonService } from "./services/common.service";

@NgModule({
  declarations: [
    AppComponent,
    SixComponent,
    SevenComponent,
    ProductsComponent,
    LoginComponent,
    ProductComponent,
    ProductlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [StorageService, CommonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
