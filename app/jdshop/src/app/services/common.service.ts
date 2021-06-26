import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Md5 } from '_ts-md5@1.2.8@ts-md5';

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

  sign(json) {
    var tempArr = [];
    for (var attr in json) {
      tempArr.push(attr);
    }
    //步骤1：对要生成签名的数据进行排序，消除提交数据的顺序不同误判
    //a\b\c--------- MD5加密后秘钥
    //b\a\c----------MD5加密后得到另外不同秘钥
    tempArr = tempArr.sort();
    var tempStr = '';
    //步骤2：将所有参数（含用户salt）进行拼接成字符串
    for (var j = 0; j < tempArr.length; j++) {
      tempStr += tempArr[j] + json[tempArr[j]]
    }
    // console.log(tempStr);
    //步骤3：使用MD5 哈希加密算法对字符串进行加密，得到一个签名秘钥
    return Md5.hashStr(tempStr);
  }
}
