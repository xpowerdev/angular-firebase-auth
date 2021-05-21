import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { FStoreService } from './../../service/f-store.service';
import { Crypto } from './../../models/crypto';
import { Trans } from '../../models/trans';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  cryptos: Crypto[];
  isLogged: boolean = false;
  newTrans: Trans = {
    user: localStorage.user,
    cryptonname: null,
    quentity: null,
    price: null,
    total: null,
  };

  updateCrypto: Crypto = {
    name: null,
    ticker: null,
    price: null,
    sell_amount: null,
    avalible_cryptos: null
  };

  constructor(public fss: FStoreService, public router: Router) {  
  }

  ngOnInit() { 
    if(localStorage.user) this.isLogged = true;
    else false;
    this.fss.getCryptos().subscribe((res)=>{
      this.cryptos = res;
    });   
  }

  beforeTrans(value: Crypto) {
    if(localStorage.user) {
      this.updateCrypto = value;
      this.newTrans.cryptonname = value.name;
      this.newTrans.price = value.price;        
    } else this.router.navigate(['/auth/login']);
  }

  tryTrans() {
    this.updateCrypto.sell_amount += this.newTrans.quentity;
    this.updateCrypto.avalible_cryptos -= this.newTrans.quentity;
    this.newTrans.total = this.newTrans.quentity * this.newTrans.price;
    this.fss.updateCrypto(this.updateCrypto);
    this.fss.addTrans(this.newTrans);
    this.newTrans = {
      user: localStorage.user,
      cryptonname: null,
      quentity: null,
      price: null,
      total: null,
    }
  }

}
