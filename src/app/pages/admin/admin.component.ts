import { Component, OnInit } from '@angular/core';
import { FStoreService } from '../../service/f-store.service';
import { Crypto } from './../../models/crypto';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  cryptos: Crypto[];
  newCrypto: Crypto = {
    name: '',
    ticker: null,
    price: null,
    sell_amount: null,
    avalible_cryptos: null
  };
  updateCrypto: Crypto = {
    name: '',
    ticker: null,
    price: null,
    sell_amount: null,
    avalible_cryptos: null
  };
  editItem: string;

  constructor(public fss: FStoreService) { }

  ngOnInit() {
    this.fss.getCryptos().subscribe((res)=>{
      this.cryptos = res;
    });
  }

  tryAddNew() {
    if(this.validator(this.newCrypto)) {
      this.fss.addCrypto(this.newCrypto);
      this.newCrypto = {
        name: null,
        ticker: null,
        price: null,
        sell_amount: null,
        avalible_cryptos: null
      };
    }
  }

  private validator(value: Crypto) {
    console.log('validator: ', value);
    if(value.name && value.ticker && value.price && value.sell_amount && value.avalible_cryptos) return true;
    else false;
  }

  tryDelete(value) {
    this.fss.deleteCrypto(value);
  }

  tryEdit(value: Crypto) {
    this.editItem = value.id;
    this.updateCrypto = Object.assign({}, value);
  }

  saveEdit() {
    if(this.validator(this.updateCrypto)) {
      this.fss.updateCrypto(this.updateCrypto);
      this.editItem = null;
    }
  }

  cancelEdit() {
    this.editItem = '';
  }

}
