import { Component, OnInit } from '@angular/core';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  public username: any = "";
  public password: any = "";
  public rpassword: any = "";

  constructor(public comm: CommonService) { }

  ngOnInit() {
  }

  register() {
    if (this.password != this.rpassword) {
      alert('密码确认密码输入错误');
    } else {
      var api = '/register';
      this.comm.ajaxPost(api, {
        "username": this.username,
        "password": this.password
      }).then((res: any) => {
        if (res.success) {
          alert(res.message);
        }
      })
    }
  }
}
