import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // let uname: string = "Liming University";
    // let score1: number = 50;
    // let score2: number = 42.50
    // let sum = score1 + score2
    // console.log("名字: " + uname)
    // console.log("第一个科目成绩: " + score1)
    // console.log("第二个科目成绩: " + score2)
    // console.log("总成绩: " + sum)

    // let num: string = "100";

    // // string
    // let uname: number = 1;
    // console.log(`名字：${uname}`);

    // let name: string = "Liming university";
    // let years: number = 2;
    // let words: string = `您好，今年是 ${name} 发布 ${years + 1} 周年`;

    // //数组
    // let arr1: number[] = [1, 778, 89, 28];
    // for (let i = 0; i < arr1.length; i++) {
    //   console.log(arr1[i]);
    // }

    // //元组
    // let x: [string, string, number];
    // x = ["张三", "男", 18];
    // console.log(x[0])

  }
}
