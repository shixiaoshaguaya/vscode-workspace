import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-five',
  templateUrl: './five.component.html',
  styleUrls: ['./five.component.scss']
})
export class FiveComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

class Car {
  // 字段
  engine: number;
  static prodate = new Date('2021-3-15');// 静态
  static num = 0;// 静态

  // 构造函数
  // constructor(engine: number) {
  //   this.engine = engine;
  // }
  constructor(engine?: number) {
    if (engine == null)
      this.engine = 0;
    else
      this.engine = engine;
  }

  // 方法
  disp(): void {
    console.log('发动机的型号是：' + this.engine);
  }
}

// 创建一个对象
let c1 = new Car(1905230340);
var c2 = new Car();

// 访问字段
console.log("读取发动机型号: " + c1.engine);
console.log(Car.prodate);

// 访问方法
c1.disp();


class Shape {
  Area: number;
  constructor(a: number) {
    this.Area = a;
  }
  doPrint(): void {
    console.log("父类shape的 doPrint() 方法。");
    console.log("面积是：" + this.Area);
  }
}

class Circle extends Shape {
  constructor(a: number) {
    super(a);
    this.Area = this.Area / 2 * 3;
  }
}

var obj1 = new Circle(123);

class Yuanzhu extends Shape {
  heigh: number;
  constructor(a: number, h: number) {
    super(a);
    this.Area = a;
    this.heigh = h;
  }
  doPrint(): void {
    console.log("子类Yuanzhu的 doPrint() 方法。");
    console.log("面积是：" + this.Area + " 高是：" + this.heigh);
  }
}

var y = new Yuanzhu(100, 1);
y.doPrint();


// interface IPerson {
//   firstName: String;
//   lastName: String;
//   sayHi: () => string;
// }

// class User implements IPerson {
//   firstName: string;
//   lastName: string;
//   sayHi: () => string;

//   constructor(firstName: string, lastName: string,) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.sayHi => "aaa";
//   }
// }