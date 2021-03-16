import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-five-ex',
  templateUrl: './five-ex.component.html',
  styleUrls: ['./five-ex.component.scss']
})
export class FiveExComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

interface ShowInfoer {//定义一个接口标准
  name: string;
  age: number;
  showInfo: () => void;//此处不是ES6的箭头函数声明，是TypeScript的函数定义
  //=>的左边定义了函数的参数模型
  //=>的右边定义了函数的返回类型
}
class Person implements ShowInfoer {
  public name: string;//姓名
  public age: number;//年龄
  public sex: string;//
  constructor(name: string, age: number, sex: string) {
    this.name = name;
    this.age = age;
    this.sex = sex;
  }
  showInfo() {
    console.log(`我的姓名:${this.name},年龄:${this.age},性别:${this.sex}`);
  }
}


class student implements ShowInfoer {
  name: string;//姓名
  age: number;//年龄
  num: string;//学号
  constructor(name: string, age: number, num: string) {
    this.name = name;
    this.age = age;
    this.num = num;
  }
  showInfo() {
    console.log(`我的姓名:${this.name},年龄:${this.age},学号:${this.num}`);
  }
}
//不使用接口时，逐一定义方法
// function personShowInfo(p: Person) {
// p.showInfo();
// }
// function studentShowInfo(s: student) {
// s.showInfo();
// }
//利用接口实现面向对象的多态
function showInfo(infoer: ShowInfoer) {
  infoer.showInfo();
}


//测试使用接口进行编程
let person1 = new Person("陈喆", 22, "男");
let student1 = new student("陈喆", 22, '1905230340');
// personShowInfo(person1);//让张三人类自我介绍
// studentShowInfo(student1);//让李四学生自我介绍
showInfo(person1);//传入Person类型对象，它满足接口标准
showInfo(student1);//传入Student类型对象，它满足接口标准


//综合应用
let infoers: ShowInfoer[] = [];
let p1 = new Person("陈喆", 22, "男");
let p2 = new Person('keti', 19, "女");
let p3 = new Person('deny', 18, "男");
let s1 = new student('tom', 18, "2019029291");
let s2 = new student('keti', 19, "202012929");
let s3 = new student('deny', 18, "2019029292");
infoers.push(p1, p2, p3, s1, s2, s3);
infoers.forEach(element => element.showInfo());