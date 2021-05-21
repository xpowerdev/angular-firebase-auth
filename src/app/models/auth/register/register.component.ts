import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, Params } from '@angular/router';

import { FAuthService } from './../../../service/f-auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;

  constructor(public fas: FAuthService, private fb: FormBuilder, public router: Router) { 
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    this.registerForm = this.fb.group({
      fullname: ['', Validators.required],
      email: ['', Validators.required ],
      password: ['',Validators.required],      
      c_password: ['', Validators.required]
    });
  }

  tryRegister(value){
    this.fas.doRegister(value)
    .then(res => {      
      this.router.navigate(['/dashboard']);
      console.log(res);
    }, err => {
      console.log(err);
    })
  }

}
