import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/*
  Firebase module for angular
*/
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AppComponent } from './app.component';
import { ModuleRouting } from './app-routing.module';

export const firebase = {
  apiKey: "AIzaSyC8ea1003voyeQn1t4YqbP218gi6TpyMeI",
  authDomain: "danijel-test.firebaseapp.com",
  databaseURL: "https://danijel-test.firebaseio.com",
  projectId: "danijel-test",
  storageBucket: "danijel-test.appspot.com",
  messagingSenderId: "37848993711"
};

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    ModuleRouting,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
