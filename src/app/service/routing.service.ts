import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RoutingService {

  constructor(private route: Router){}

  loginRoute(){
    this.route.navigate(['login']);
  }

  dashboardRoute(){
    this.route.navigate(['dashboard']);
  }

  homeRoute(){
    this.route.navigate(['home']);
  }

  signupRoute(){
    this.route.navigate(['signup']);
  }

}
