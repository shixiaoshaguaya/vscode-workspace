import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // console.log(add(100, 500));

    // // console.log(buildName("张"));
    // // console.log(buildName("张", "111"));

    // console.log(buildName("张"));
    // console.log(buildName("张", "111", " 厦门理工大学"));
    // console.log(buildName("张", "厦门理工大学"))

    // console.log(myAdd(10, 20));

    // // 匿名函数自调用
    // (function () { var x = "Hello!!"; console.log(x) })();


    // console.log(getInfo(true));
    // console.log(getInfo("张", 15, true));


    // //setTimeout(function () { alert('已经启动。。。'); }, 1000);
    // setTimeout(() => { alert('已经启动。。。'); }, 1000);


    const numbers: number[] = [15, 6, 13, 0, 1, 18, 23];
    const double = numbers.map(number => number * 2);
    console.log(double);
  }

}

function getInfo(name: string): string;
function getInfo(age: number): string;
function getInfo(sex: boolean): boolean;
function getInfo(name: string, age: number, sex: boolean): boolean;
function getInfo(str: any): any {
  if (typeof str === 'string') {
    return '我叫：' + str;
  }
  else if (typeof str === 'number') {
    return '我的年龄是' + str;
  } else {
    if (str === false) {
      return '我是女生';
    } else {
      return '我是男生';
    }
  }
}



// 函数
function add(x: number, y: number): number {
  return x + y;
}

// // 可选参数
// function buildName(firstName: string, lastName?: string) {
//   if (lastName != null)
//     return firstName + " " + lastName;
//   else
//     return firstName;
// }

// 默认参数
function buildName(firstName: string, lastName?: string, school = " 黎明职业大学") {
  if (lastName != null)
    return firstName + " " + lastName + school;
  else
    return firstName + school;
}

// 匿名函数
let myAdd = function (x: number, y: number): number { return x + y; };