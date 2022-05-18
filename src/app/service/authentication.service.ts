import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(){}

  authenticateUser(username:string, password:string): string{
    if(username == 'roger' && password == 'pass'){
      return 'Bearer valid.user.token';
    } else {
      return 'invalid.user';
    }
  }

  isAuthenticated(token:string): boolean{
    if(token == 'Bearer valid.user.token'){
      return true;
    } else {
      return false;
    }
  }

  setToken(token:string){
    localStorage.setItem('bearerToken', token);
  }

  getToken(): any{
    return localStorage.getItem('bearerToken');
  }

}
