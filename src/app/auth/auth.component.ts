import { Component, OnInit } from '@angular/core';
// import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
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
          this._router.navigate(['/auth']); 
          console.log("no");
        }


    // this.Auth.login(body).subscribe(error => {
    //   console.log("error: result...:", error);
     
    //   this.router.navigate(['/auth']); 
    // },
    // data=>{
    //   console.log("success: result...:", data.status);
    //   if(data.status===200)
    //  {
    //   this.router.navigate(['/home']);
    //  }
    //  if(data.status===401)
    //  {
    //   alert("invalid user or password");
    //  }
    // }
    // );
    
    
  }
 
}
