import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public username: string = '';
  public password: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  login() {
    if (this.username == "admin" && this.password == "123456") {
      alert("恭喜登录成功！");
    } else {
      alert("登录帐号或密码有误，请重新输入！");
    }
  }
}
