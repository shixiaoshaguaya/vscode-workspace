import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(public comm: CommonService, public nc: NavController) { }

  ngOnInit() {
  }

  logIn(username, password) {
    console.log(username.value, password.value);
    this.nc.navigateBack("/tabs/tab1");
  }

  goRegister() {
    this.nc.navigateBack("/register");
  }
}
