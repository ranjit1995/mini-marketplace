import { Component, OnInit } from '@angular/core';
// import { AuthService } from '../auth.service';
import { Router,
NavigationExtras } from '@angular/router';
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  email: any;
  
  password: any;
  
  userName: any;

  constructor(private _router: Router ) { }

  ngOnInit() {
  }
 loginUser(){
    let body = {
      "email": this.userName,
      "password": this.password,
    }
    console.log("Raw data", body);
    
if(this.userName==='ranjit' && this.password==='ranjit')
{
  this._router.navigate(['/home']);  
}
this._router.navigate(['/auth']); 
alert("login unsuccessfull");
    // this.Auth.login(body).subscribe(error => {
    //   console.log("error: result...:", error);
     
    //   this._router.navigate(['/auth']); 
    // },
    // data=>{
    //   console.log("success: result...:", data.status);
    //   if(data.status===200)
    //  {
    //   this._router.navigate(['/home']);
    //  }
    //  if(data.status===401)
    //  {
    //   alert("invalid user or password");
    //  }
    // }
    // );
    
    
  }
  
}
