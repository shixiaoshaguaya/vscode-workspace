import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { CommonService } from '../services/common.service';
import { EventService } from '../services/event.service';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  public tel: any = "";
  public code: any = "";
  public password: any = "";
  public rpassword: any = "";

  constructor(public comm: CommonService, public nc: NavController, public st: StorageService, public eventService: EventService) { }

  ngOnInit() {
  }

  register() {
    //简单验证    、 服务器也需要验证      
    if (this.password != this.rpassword) {
      alert('密码确认密码输入错误');
    } else if (this.password.length < 6) {
      alert('密码长度不能小于6位');
    } else {
      var api = 'api/validateCode';
      this.comm.ajaxPost(api, { "tel": this.tel, "code": this.code }).then((response: any) => {
        if (response.success) {
          var api = 'api/register';
          var postJson = {
            tel: this.tel,
            code: this.code,
            password: this.password
          }
          this.comm.ajaxPost(api, postJson).then((res: any) => {
            console.log(res);
            if (res.success) {
              // 1、保存用户信息         2、跳转到首页
              this.st.set('userinfo', res.userinfo[0]);
              //通知用户中心更新用户信息
              this.eventService.event.emit('useraction');
              //回到根
              this.nc.navigateRoot('/tabs/user');
            } else {
              alert('注册失败');
            }
          })
        } else {
          alert('验证码输入错误');
        }
      })
    }
  }

  sendCode() {
    if (/^1(3|4|5|7|8)\d{9}$/.test(this.tel)) {
      var api = 'api/sendCode';
      this.comm.ajaxPost(api, { "tel": this.tel }).then((res: any) => {
        console.log(res);
        if (!res.success) {
          alert('发送验证码失败' + res.message);
        }
      });
    } else {
      alert('电话号码格式不正确');
    }
  }

}
