import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

import { Crypto } from './../models/crypto';
import { Trans } from '../models/trans';

@Injectable({
  providedIn: 'root'
})
export class FStoreService {

  cryptosCollection: AngularFirestoreCollection<Crypto>;
  cryptos: Observable<Crypto[]>;
  cryptoDoc: AngularFirestoreDocument<Crypto>;

  transCollection: AngularFirestoreCollection<Trans>;

  constructor(public afs: AngularFirestore) { 
  }

  ngOnit() {
    
  }

  getCryptos() {
    this.cryptosCollection = this.afs.collection('cryptos', ref => ref.orderBy('ticker', 'desc'));
    this.cryptos = this.cryptosCollection.snapshotChanges()
    .map(actions => {
      return actions.map(a => {
        let data = a.payload.doc.data() as Crypto;
        data.id = a.payload.doc.id;
        return data;
      })
    });
    return this.cryptos;
  }

  addCrypto(crypto: Crypto) {
    this.cryptosCollection.add(crypto);
  }

  deleteCrypto(crypto: Crypto) {
    this.cryptoDoc = this.afs.doc(`cryptos/${crypto.id}`);
    this.cryptoDoc.delete();
  }

  updateCrypto(crypto: Crypto) {
    this.cryptoDoc = this.afs.doc(`cryptos/${crypto.id}`);
    this.cryptoDoc.update(crypto);
  }

  addTrans(trans: Trans) {
    this.cryptosCollection = this.afs.collection('transaction');
    this.cryptosCollection.add(trans);
  }
}
