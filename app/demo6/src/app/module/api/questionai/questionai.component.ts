import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-questionai',
  templateUrl: './questionai.component.html',
  styleUrls: ['./questionai.component.scss']
})
export class QuestionaiComponent implements OnInit {
  public question: string = '';//存储用户输入的问题
  public answer: string = '';//保存接口返回的回答

  constructor(public comm: CommonService) { }

  ngOnInit(): void {
  }

  ai_answer() {
    if (this.question) {

      let apiurl: string = `http://jisuapiiqa.api.bdymkt.com/iqa/query?question=${this.question}`
      let option: any = {
        headers: { 'X-Bce-Signature': 'AppCode/6a73a1c46569446fa87b78b35ef2b253' }
      };

      //调用公共服务中提供的ajaxPost方法发起对接口的Post请求
      this.comm.ajaxPost(apiurl, [], option).then(
        (response: any) => {
          this.answer = response.result.content;//注意接口返回数据的结构
        }
      );
    }
    else {
      alert('请输入要提问的问题！');
    }
  }

}
