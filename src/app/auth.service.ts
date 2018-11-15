import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  status: number;
  getLoggedInName: any;
  getToken: any;
  
  constructor(private http: HttpClient, private _router: Router,private _cookieService: CookieService) { }
  token: string;
  setToken(token: string) {
    this.token = token;
    console.log("this is a token",token)
  }

  getList(key) {
    return this._cookieService.getObject(key);

  }
  saveData(key, Object, CookieOptionsArgs) {
    this._cookieService.putObject(key, Object, CookieOptionsArgs);

  }


  getCookie(key) {
    return this._cookieService.get(key);
  }
  
  saveCookie(key, Object, CookieOptionsArgs) {
    this._cookieService.put(key, Object, CookieOptionsArgs);
  }

  removeCookie(key) {
    this._cookieService.remove(key);
  }
  remove() {
    this._cookieService.removeAll();
  }

  
  
  
  login(body) {
    console.log("IN service");
    return this.http.post('http://192.168.0.37:3000/auth/login',body);
    
  }
  addProduct(body) {
    console.log("IN service",body);
    return this.http.post('http://192.168.0.37:3000/products/add',body);

  }
  registration(body)
  {
    console.log("registration");
    return this.http.post('http://192.168.0.37:3000/users/reg',body);
  }
  getData()
  {
    console.log("Get data");
    return this.http.get('http://192.168.0.37:3000/users/reg');
  }
  editUserData(token)
  {
    console.log("IN service",token);
    return this.http.put('http://192.168.0.37:3000/users/',token); 
  }
  searchUserData(body)
  {
    console.log("IN service",body);
    return this.http.post('http://192.168.0.37:3000/products/search',body); 
  }
}



