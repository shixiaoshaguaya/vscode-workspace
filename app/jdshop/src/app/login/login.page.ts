import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { CommonService } from '../services/common.service';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(public comm: CommonService, public nc: NavController, public storage: StorageService, public activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  }

  logIn(username, password) {
    var api = "api/doLogin";
    this.comm.ajaxPost(api, {
      username: username.value,
      password: password.value,
    }).then((response: any) => {
      console.log(response);
      if (response.success) {
        //1、保存用户信息，注意返回的数据结构，其中userinfo信息是一个数组，此处取第一个值
        this.storage.set('userinfo', response.userinfo[0]);
        //2、跳转到用户中心 (根)
        this.nc.navigateRoot("/tabs/user");
      } else {
        alert(response.message);
      }
    })
  }

  goRegister() {
    this.nc.navigateBack("/register");
  }
}
