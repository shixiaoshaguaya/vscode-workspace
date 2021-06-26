import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { sign } from 'crypto';
import { userInfo } from 'node:os';
import { CartService } from '../services/cart.service';
import { CommonService } from '../services/common.service';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.page.html',
  styleUrls: ['./checkout.page.scss'],
})
export class CheckoutPage implements OnInit {
  public returnUrl = '';
  public userinfo: any = {};//用户登录信息
  public productList: any[] = [];//购买产品列表
  public config: any = {};
  public addressList: any = {};//收货地址列表
  public allPrice = 0;//待支付总金额

  constructor(public activatedRoute: ActivatedRoute, public navController: NavController, public storage: StorageService, public common: CommonService, public cart: CartService) {
    this.config = this.common.config;
  }

  ngOnInit() {
    //获得返回URL即从那个页面发起订单结算，有两种来源：1购物车页面 2商品详情页中“立即购买”
    this.activatedRoute.queryParams.subscribe((data: any) => {
      data.returnUrl ? this.returnUrl = data.returnUrl : this.returnUrl = '/tabs/cart'
    })
  }

  ionViewDidEnter() {
    //获取用户信息
    var userinfo = this.storage.get('userinfo');
    if (userinfo && userinfo.username) {
      this.userinfo = userinfo;
      //用户登录后获取默认收货地址
      this.getDefaultAddress();
    } else {
      this.userinfo = '';
    }
    //获取去结算的商品
    this.productList = this.storage.get('checkoutData');
    //计算总价
    this.allPrice = this.cart.getAllPrice(this.productList);
  }

  //获取默认收获地址
  getDefaultAddress() {
    var sign = this.common.sign({
      uid: this.userinfo._id,
      salt: this.userinfo.salt
    })
    var api = 'api/oneAddressList?uid=' + this.userinfo._id + '&sign=' + sign;
    this.common.ajaxGet(api).then((data: any) => {
      if (data.success) {
        this.addressList = data.result[0];
      } else {
        alert(data.message);
      }
    })
  }

  goBack() {
    this.navController.navigateBack(this.returnUrl);
  }

  //提交订单
  doOrder() {
    //获取用户信息
    //获取用户的收货地址
    //获取商品信息
    if (!this.userinfo) {
      this.navController.navigateForward(['/login'], {
        queryParams: {
          returnUrl: '/checkout'
        }
      });
    } else if (!this.addressList) {
      alert('您还没有选择收货地址');
    } else {
      //需要获取信息
      var address: any = this.addressList.address;
      var phone: any = this.addressList.phone;
      var name: any = this.addressList.name;
      var all_price = this.allPrice;
      var products: any = JSON.stringify(this.productList);
      //签名的字段
      let json = {
        uid: this.userinfo._id,
        salt: this.userinfo.salt,
        address: address,
        phone: phone,
        name: name,
        all_price: all_price,
        products: products
      }
      let sign = this.common.sign(json);
      //请求数据
      let api = 'api/doOrder';
      this.common.ajaxPost(api, {
        uid: this.userinfo._id,
        salt: this.userinfo.salt,
        address: address,
        phone: phone,
        name: name,
        all_price: all_price,
        products: products,
        sign: sign
      }).then((response: any) => {
        //需要删除购物车选中的商品
        this.removeCartSelected();
        console.log(response);
        if (response.success) {
          this.navController.navigateForward(['/payment'], {
            queryParams: {
              order_id: response.result.order_id
            }
          });

        } else {
          alert(response.message);
        }
      })
    }
  }

  //删除购物车选中的商品
  removeCartSelected() {
    let noCheckedCartList = [];
    var cartList = this.storage.get('cartList');
    for (var i = 0; i < cartList.length; i++) {
      if (!cartList[i].checked) {
        noCheckedCartList.push(cartList[i]);
      }
    }
    // console.log(noCheckedCartList);
    this.storage.set('cartList', noCheckedCartList);
  }
}
