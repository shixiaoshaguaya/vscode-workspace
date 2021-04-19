import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  public config: any = {
    apidomain: "http://www.goodest.com.cn:8080/opple/rest/", //可改为使用仿京东商城接口    
  };

  constructor(public http: HttpClient) { }

  ajaxGet(api: string) { //根据API地址请求数据的方法，该方法返回一个代表异步操作结果的承诺Promise对象，外部调用的可以根据该对象做处理
    var url: string = this.config.apidomain + api;//将API服务器地址+API方法地址拼接成完整的URL地址
    return new Promise((resove, reject) => {
      this.http.get(url).subscribe(//针对get异步请求结果来决定返回什么状态的Promise对象
        (response) => {
          resove(response);//发起get请求，成功时，返回一个resole状态的Promise
        },
        (error) => {
          reject(error);//get请求失败，则返回一个reject状态的Promise
        });
    });
  }

  ajaxPost(api: string, data: object, option: any) {//根据API地址POST提交数据
    var url: string = this.config.apidomain + api;
    return new Promise((resove, reject) => {
      this.http.post(url, data, option).subscribe((response) => {
        resove(response);
      }, (error) => {
        reject(error);
      })
    })
  }

}
