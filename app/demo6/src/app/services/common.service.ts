import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  //定义一个公共服务，并在该服务中利用HTTPClient的数据交互功能实现
  //通用的数据交互方法供各个组件使用
  public config: any = {
    apidomain: "http://jd.itying.com/api/", //可改为使用仿京东商城接口
    imgdomain: "http://jd.itying.com" //可改为使用仿京东商城接口
  };

  //在构造方法中以属性参数的方式使用HttpClient服务，使得Angular帮忙进行服务依赖注入
  constructor(public http: HttpClient) { }

  //该方法接收一个请求的API接口地址，进行数据请求，并返回结果
  ajaxGet(api: string) { //根据API地址请求数据的方法，该方法返回一个代表异步操作结果的承诺Promise对象，外部调用的可以根据该对象做处理
    var url: string = this.config.apidomain + api;//将API服务器地址+API方法地址拼接成完整的URL地址
    return new Promise((resove, reject) => {
      //HttpClient.get()一个异步请求，返回了 obserabel对象，所以外部需要以定义方式进行处理

      this.http.get(url).subscribe(//针对get异步请求结果来决定返回什么状态的Promise对象
        (response) => {
          resove(response);//发起get请求，成功时，返回一个resole状态的Promise
        },
        (error) => {
          reject(error);//get请求失败，则返回一个reject状态的Promise
        });
    });
  }

  //该方法接收一个要提交数据的接口地址及要提交的数据，和提交时选项，进行数据提交，并返回结果
  ajaxPost(api: string, data: object, option: any) {//根据API地址POST提交数据
    var url: string = '';
    if (!api.startsWith("http")) {
      url = this.config.apidomain + api;
    } else {
      url = api;
    }

    return new Promise((resove, reject) => {
      this.http.post(url, data, option).subscribe((response) => {
        resove(response);
      }, (error) => {
        reject(error);
      })
    })
  }

}
