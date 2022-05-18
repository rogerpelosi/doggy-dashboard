import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../service/authentication.service';
import { RoutingService } from '../service/routing.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    private routing: RoutingService,
    private auth: AuthenticationService){}

  ngOnInit(): void {
  }

  logout(){
    console.log('log out invoked!');
    this.auth.setToken('invalid.user');
    this.routing.loginRoute();
  }

}
