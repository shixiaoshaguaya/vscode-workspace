import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {
  public userinfo: any = {};

  constructor(public storage: StorageService, public nc: NavController) {
    //初始化用户信息
    var userinfo = this.storage.get('userinfo');
    if (userinfo && userinfo.username) {
      this.userinfo = userinfo;
    } else {
      this.userinfo = '';
    }
  }

  ngOnInit() {
  }

  gologin() {
    this.nc.navigateBack("/login");
  }
}
