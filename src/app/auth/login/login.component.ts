import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: any;
  
  password: any;
  
  userName: any;
  show: boolean;

  
  constructor(private _router: Router) { 
// initialize variable value
    this.show = false;
  }

  ngOnInit() {
  }
  viewpass()
  {
    this.show = !this.show;
  }
 loginUser(){
    let body = {
      "email": this.userName,
      "password": this.password,
    }
    console.log("Raw data", body);
    
    if(this.userName === 'ranjit' && this.password === 'ranjit') {
           this._router.navigate(['/home']);
         // this._router.navigate(['/', 'home']);
          console.log("hiiiii");  
        }
         else {
          this._router.navigate(['/auth/login']); 
          console.log("no");
        }
      }

}
