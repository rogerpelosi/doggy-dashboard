import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../service/authentication.service';
import { RoutingService } from '../service/routing.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private routing: RoutingService,
    private auth: AuthenticationService){}

  loginForm: FormGroup = this.formBuilder.group({
    username: this.formBuilder.control('',[Validators.required]),
    password: this.formBuilder.control('', [Validators.required])
  });

  error?: string;

  ngOnInit(): void {
  }

  login(){
    console.log(this.loginForm.value['username'], this.loginForm.value['password']);
    let token:string = this.auth.authenticateUser(this.loginForm.value['username'], this.loginForm.value['password']);
    this.auth.setToken(token);
    if(token == 'Bearer valid.user.token'){
      this.error = '';
      this.routing.dashboardRoute();
    } else if(token == 'invalid.user') {
      this.error = 'INVALID CREDENTIALS'
    } else {
      this.error = 'server error';
    }
  }

}
