import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  public config: any = { domain: 'http://jd.itying.com/' }

  constructor(public http: HttpClient) { }

  //数据请求方法，需要一个参数即要请求的API地址  
  ajaxGet(url: String) {
    var api = this.config.domain + url;
    return new Promise((resove, reject) => {
      this.http.get(api).subscribe((response) => { resove(response); }, (error) => { reject(error); }
      )
    })
  }

  //数据发送方法，需要两部分的参数：1.API接口地址；2.要发送的数据（JSON格式）  
  ajaxPost(url: String, json: Object) {
    var api = this.config.domain + url;
    return new Promise((resove, reject) => {
      this.http.post(api, json).subscribe((response) => { resove(response); }, (error) => { reject(error); })
    })
  }
}
