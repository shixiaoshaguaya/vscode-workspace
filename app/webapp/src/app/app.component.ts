import { Component } from '@angular/core';

//@Component装饰器，装饰类成为Anguar程序中的组件
@Component({
  selector: 'app-root',//DOM模型选择器标签，告知如果页面<app-root>指向该组件
  templateUrl: './app.component.html',//该组件内容展示结构
  styleUrls: ['./app.component.scss']//内容在展示时引用的样式表
})
export class AppComponent {
  //内部可以定义该页面单元（组件）需要用到的脚本命令 
  //数据、方法、事件可以在页面中被使用 
 public  title:string = '欢迎使用Angular开发';
}
