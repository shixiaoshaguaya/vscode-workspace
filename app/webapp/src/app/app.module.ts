import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ProductsComponent } from './components/products/products.component';
import {FormsModule} from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
//注解：@Controller、@AutoWired

@NgModule({
  declarations: [//声明该模块有哪些组件,ng g component时，自动在模块中声明
    AppComponent, HeaderComponent, ProductsComponent, LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule //在根模块中imports装饰告知Angular加载FormsModule
  ],
  providers: [],//模块中定义的服务
  bootstrap: [AppComponent]//该模块启动后的默认引导组件为AppComponent
})//装饰器（原理类似于JAVA注解），用于装饰类提升类功能
export class AppModule { }
