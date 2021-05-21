import { Component, OnInit } from '@angular/core';
import { Router, Params } from '@angular/router';

import { FAuthService } from '../../service/f-auth.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  isLogged: boolean = false;
  isAdmin: boolean = false;

  constructor(public fAuthService: FAuthService, public router: Router) { }

  ngOnInit() {
    if(localStorage.user) {
      this.isLogged = true;
      if(localStorage.user == 'admin@app.com') {
        this.isAdmin = true;
        this.router.navigate(['/admin']);
      }
    }
  }

  tryLogOut(value){
    this.fAuthService.doLogout()
    .then(res => {
      // this.router.navigate(['/dashboard']);
      window.location.href = '/dashboard';
      this.isLogged = false;
      this.isAdmin = false;
      localStorage.setItem('user', '');
    }, err => {

    })
  }

}
