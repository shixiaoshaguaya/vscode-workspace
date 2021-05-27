import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(public comm: CommonService, public nc: NavController) { }

  ngOnInit() {
  }

  register() {
    this.nc.navigateBack("/login");
  }
}
