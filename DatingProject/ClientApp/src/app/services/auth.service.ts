import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/Users'
import { AuthUser } from '../models/AuthUser';
import 'rxjs/add/operator/map';


@Injectable()

export class AuthService {
baseUrl = 'http://lochttp://localhost:50757/api/auth/login';
  constructor(private http: HttpClient) {}

  /*
  login(value: string) {

    const contentHeader = new HttpHeaders({ 'Content-type': 'application/json'})

    return this.http.post(this.baseUrl, value, { headers: contentHeader });

  } 
  */

  login(user: User) {
    return this.http.post<AuthUser>(this.baseUrl + '/auth/login', user)
      .map((result: AuthUser) => { 
        if (result) {
          localStorage.setItem('token', result.tokenString);
    localStorage.setItem('user', JSON.stringify(user));
    console.log("Never");
       // }
        return user;
  //}
  //);
  }

}
