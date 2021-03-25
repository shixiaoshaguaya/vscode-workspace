import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public username: string = 'aaa';
  public password: string = '123456';

  // person = { username: "10001", password: "黄启航", age: 18, sex: '1' };

  person = { username: "10001", password: "黄启航", age: 18, sex: '1', citys: ['北京', '上海', '深圳', '泉州'], city: '' };

  constructor() {
    console.log("--------888888888888888888888-------");
  }

  ngOnInit(): void { }

  login() {
    if (this.username == "admin" && this.password == "123456") {
      alert("恭喜登录成功！" + this.username);
    } else {
      alert("登录帐号或密码有误，请重新输入！" + this.username);
    }
  }

  getData() {
    console.log("用户名：" + this.username + "  密码：" + this.password);
    console.log("性别：" + this.person.sex);
    console.log(this.person);
  }
}
