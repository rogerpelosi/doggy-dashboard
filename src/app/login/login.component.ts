import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder){}

  loginForm: FormGroup = this.formBuilder.group({
    username: this.formBuilder.control('',[Validators.required]),
    password: this.formBuilder.control('', [Validators.required])
  });

  ngOnInit(): void {
  }

  login(){
    console.log(this.loginForm.value['username'], this.loginForm.value['password']);
  }

}
