import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Output() getLoggedInName: EventEmitter<any> = new EventEmitter();

  userName: any;
  show: boolean;
password:any
  emitterService: any;
  
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
    
    if(this.userName === 'ranjit@gmail.com' && this.password === 'ranjit123') {
           this._router.navigate(['/main']);
         // this._router.navigate(['/', 'home']);
          console.log("hiiiii");  
          //this.emitterService.getEmitter('userName').emit(this.userName);
        }
         else {
          this._router.navigate(['/auth/login']); 
          console.log("no");
          alert("username or password invalid")
        }
      }

      email = new FormControl('', [Validators.required, Validators.email, Validators.minLength(3)]);
      pass = new FormControl('', [Validators.required,Validators.minLength(8)]);
      getErrorMessage1() {
        return this.email.hasError('required') ? 'You must enter a valid user ID' :
            this.email.hasError('email') ? 'Not a valid user ID' :'';
      }
      getErrorMessage2() {
        return this.email.hasError('required') ? 'You must enter a valid password' :
            this.email.hasError('pass') ? 'Invalid password' :'';
      }

      
}
