import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  status: number;
  

  postUserUpdates(body: { "first_name": String; "last_name": String; "email": String; "mobile": Number; "password": String; "address": String; }): any {
    throw new Error("Method not implemented.");
  }
  

  constructor(private http: HttpClient, private _router: Router) { }
  login(body) {
    console.log("IN service");
    return this.http.post('http://192.168.1.38:3000/auth/login',body);
  }
  createUser(body) {
    console.log("IN service");
    return this.http.post('http://192.168.1.38:3000/users',body);

  }
  editUserUpdate(body1) {
    console.log("IN service",body1);
    return this.http.put('http://192.168.1.38:3000/users',body1);
    
    
    
  }
  deleteUserData(body) {
    console.log("IN service",body);
    return this.http.delete('http://192.168.1.38:3000/users',body);
   

  }
  viewUserData(email) {
    console.log("IN service",email);
    return this.http.get('http://192.168.1.38:3000/users/'+email);
   

  }


  
}

