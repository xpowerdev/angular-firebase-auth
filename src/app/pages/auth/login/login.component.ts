import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, Params } from '@angular/router';

import { FAuthService } from './../../../service/f-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(public fas: FAuthService, private fb: FormBuilder, public router: Router) { 
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    this.loginForm = this.fb.group({
      email: ['', Validators.required ],
      password: ['',Validators.required]
    });
  }

  tryLogin(value){
    this.fas.doLogin(value)
    .then(res => {
      if(res.user.email == 'admin@app.com') this.router.navigate(['/admin']);
      else this.router.navigate(['/dashboard']);
      console.log(res);
    }, err => {
      console.log(err);
    })
  }

}
