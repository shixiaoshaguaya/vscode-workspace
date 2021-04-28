import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-wuliu',
  templateUrl: './wuliu.component.html',
  styleUrls: ['./wuliu.component.scss']
})
export class WuliuComponent implements OnInit {
  public sno: string = '';//存储用户输入的问题
  public traces: any[] = [];//保存接口返回的快递单状态记录

  constructor(public commonservice: CommonService) { }

  ngOnInit(): void {
  }

  ai_answer() {
    if (this.sno) {
      let apiurl: string = `https://hcapi03.api.bdymkt.com/express/trace/query?number=${this.sno}`
      let option: any = {
        headers: { 'X-Bce-Signature': 'AppCode/6a73a1c46569446fa87b78b35ef2b253' }
      };

      //调用公共服务中提供的ajaxPost方法发起对接口的Post请求
      this.commonservice.ajaxPost(apiurl, [], option).then(
        (response: any) => {
          this.traces = response.data.traces;//注意接口返回数据的结构
          console.log(this.traces);
        }
      );
    }
    else {
      alert('请输入要查询的快递单号！');
    }
  }

}
