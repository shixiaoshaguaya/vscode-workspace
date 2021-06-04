import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { CommonService } from '../services/common.service';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(public comm: CommonService, public nc: NavController, public storage: StorageService,) { }

  ngOnInit() {
  }

  logIn(username, password) {
    var api = "/login"
    this.comm.ajaxPost(api, {
      "username": username.value,
      "password": password.value
    }).then((res: any) => {
      if (res.success) {
        alert(res.message);
        //1、保存用户信息，注意返回的数据结构，其中userinfo信息是一个数组，此处取第一个值
        this.storage.set('userinfo', res.data);
        //2、跳转到用户中心 (根)
        this.nc.navigateRoot("/tabs/tab3");
      } else {
        alert(res.message);
      }
    })
  }

  goRegister() {
    this.nc.navigateBack("/register");
  }
}
