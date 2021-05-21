import { Injectable } from '@angular/core';
import { AngularFireAuth} from 'angularfire2/auth';
import { resolve } from 'url';

@Injectable({
  providedIn: 'root'
})
export class FAuthService {

  constructor(public afAuth: AngularFireAuth) { }

  isLogged() {
    if(localStorage.user) return true;
    else return false;
  }

  doRegister(value){
    console.log('register: ', value.password);
    return new Promise<any>((resolve, reject) => {
      this.afAuth.auth.createUserWithEmailAndPassword(value.email, value.password)
      .then(res => {
        localStorage.setItem('user', this.afAuth.auth.currentUser.email);
        resolve(res);
      }, err => reject(err))
    })
  }

  doLogin(value){
    return new Promise<any>((resolve, reject) => {
      this.afAuth.auth.signInWithEmailAndPassword(value.email, value.password)
      .then(res => {
        localStorage.setItem('user', this.afAuth.auth.currentUser.email);
        resolve(res);
      }, err => reject(err))
    })
  }

  doLogout(){
    return new Promise((resolve, reject) => {
      if(localStorage.user){
        this.afAuth.auth.signOut();
        resolve();
      } else {
        reject();
      }
    });
  }

}
