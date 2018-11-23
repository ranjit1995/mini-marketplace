import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { CookieService } from 'angular2-cookie/services/cookies.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  session: any;
  id: any;
  token: any;
  role_id: any;
  user: any;

  constructor(private auth:AuthService,
    private cookies:CookieService,
    private httpService: HttpClient,private Auth:AuthService,private http: HttpClient, private _router: Router,){

   }

  ngOnInit() {
  this.userName();
  }
   userName()
   {
     this.Auth.oneUserName().subscribe(
       data=>{
        this.user = data[0];
        console.log("success: result...:", this.user);
      
console.log("user found",data);
       },
       err=>
       {

        console.log("user not found",err);
       }
     )
   }
  logout()
  {
    let body={
      "id":this.id,
    }
    this.Auth.Logout(body).subscribe(
      error => {
        localStorage.removeItem('currentUser');
      console.log("error: result...:", error);
     
      this._router.navigate(['/registration']); 
    },
    data=>{
      console.log("success: result...:", data.status);
      this._router.navigate(['/auth/login']);
      if(data.status===201)
     {
      this._router.navigate(['/auth/login']);
     }
     if(data.status===401)
     {
      alert("invalid user or password");
     }
    }
    );
    this.session.destroy();
    this._router.navigate(['/home']);
  }
  myFav()
  {
    var currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.token = currentUser && currentUser.token;
    const Token =this.token;
    
    this.role_id=currentUser && currentUser.role_id;
    console.log("roll id" ,this.role_id);
      const roleId=this.role_id
      let loginHeaders = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'token': this.token
        })
      }

  if(roleId===1)
  {
    this._router.onSameUrlNavigation = 'reload';
    this._router.navigate(['/seller']);
  }
  if(roleId===2)
  
  {
    this._router.onSameUrlNavigation = 'reload';
    this._router.navigate(['/buyer/my-favourite']);}
  }
}
   
 
  

