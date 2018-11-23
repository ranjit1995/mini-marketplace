import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Validators, FormControl } from '@angular/forms';
import { AuthService } from 'src/app/auth.service';
import { Key } from 'protractor';
import { CookieService } from 'angular2-cookie/services/cookies.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userName: any;
  show: boolean;
password:any
  emitterService: any;
  token: any;
  role_id: any;
  //token: any;
  
  
  constructor(private cookies:CookieService,private _router: Router,private Login: AuthService, ) {
   
    this.show = false;
  }

  ngOnInit() {
  }
  viewpass()
  {
    this.show = !this.show;
  }
 loginUser(){

  let headers = new Headers();

  headers.append('Content-Type', 'application/json');
  headers.append('Accept', 'application/json');

  headers.append('Access-Control-Allow-Origin', 'http://localhost:3000');
  headers.append('Access-Control-Allow-Credentials', 'true');

    let body = {
      "email": this.userName,
      "password": this.password,
    }
    console.log("Raw data", body);
    this.Login.login(body).subscribe(
      data=>{  
        localStorage.setItem('currentUser', JSON.stringify(data));
        console.log("success: result...:", data);

        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.token = currentUser && currentUser.token;
        const Token =this.token;
        this.role_id=currentUser && currentUser.role_id;
        const Role=this.role_id;
        console.log("role id" ,this.role_id);
        console.log("token" ,Token);
          if(Role === 2)
          {
           console.log("in side routing");
            this._router.navigate(['/buyer']);
          }
          if(Role === 1)
          {
            this._router.navigate(['/main']);
          }
     },
      error => {
      console.log("error: result...:", error);
      if(error.status===401)
     {
      alert("invalid user or password");
      this._router.navigate(['/auth/login']); 
     }
      
    },
    
    
    );

    this.cookies.put('test','testing of cookies');
      }

      email = new FormControl('', [Validators.required, Validators.email]);
      pass = new FormControl('', [Validators.required,Validators.minLength(8)]);
      getErrorMessage1() {
        return this.email.hasError('required') ? 'You must enter a valid user ID' :
            this.email.hasError('email') ? 'Not a valid user ID' :'';
      }
      getErrorMessage2() {
        return this.email.hasError('required') ? 'You must enter at least 8 password' :
            this.email.hasError('pass') ? 'Invalid password' :'';
      }

      
}
