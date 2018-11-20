import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})

export class AuthService {
  getLoggedInName: any;
  getToken: any;
  public accessToken: string;
  public name: string;
  token: any;
  role_id: any;
  url:'http://localhost:3000'
  constructor(private http: HttpClient, private _router: Router,) { 

    var currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.token = currentUser && currentUser.token; 
// initialize variable value
console.log("token",this.token);
  }



  login(body){
  const  url='http://localhost:3000';
    console.log("IN service"); 
    return this.http.post(url+'/auth/login',body);
    
  }
  addProduct(body){
      const  url='http://localhost:3000';
      var currentUser = JSON.parse(localStorage.getItem('currentUser'));
      this.token = currentUser && currentUser.token;
      const Token =this.token;
      
      this.role_id=currentUser && currentUser.role_id;
      console.log("roll id" ,this.role_id);  
        let loginHeaders = {
          headers: new HttpHeaders({
              'Content-Type': 'application/json',
              'token': this.token
          })
        }
      const data = new FormData();
        data.append('token', JSON.stringify(this.token));
        console.log("IN service body",body);
        console.log("IN service token",body,Token); 
        return this.http.post(url+'/products/add',body,loginHeaders);
    }
        
  
  registration(body){
            const  url='http://localhost:3000';
            console.log("registration");
            return this.http.post(url+'/users/reg',body);
  }


  getData(){
        const  url='http://localhost:3000';
        console.log("Get data");
        return this.http.get(url+'/users/reg');
  }
  editUserData(body){
    const  url='http://localhost:3000';
    var currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.token = currentUser && currentUser.token;
    const Token =this.token;
    
    this.role_id=currentUser && currentUser.role_id;
    console.log("roll id" ,this.role_id);  
      let loginHeaders = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'token': this.token
        })
      }
    const data = new FormData();
      data.append('token', JSON.stringify(this.token));
      console.log("IN service",body);
      console.log("IN service token",body,Token); 
      return this.http.post(url+'/products/edit',body,loginHeaders);
  }
  
  //search product
  searchUserData(search){
    const  url='http://localhost:3000';
    // let loginHeaders = {
    //   headers: new HttpHeaders({
    //       'Content-Type': 'application/json',
    //       'search' : search
    //   })
    // }
    console.log("IN service",search);
   // console.log("IN service",loginHeaders);
    
    return this.http.get(url+'/products/search/'+search); 
  }
  //delete the product
  delete(id){
    const  url='http://localhost:3000';
    console.log("IN service",id);
    return this.http.delete(url+'/products/'+id); 
  }
  // logout
  Logout(id){
    const  url='http://localhost:3000';
    console.log("IN service",id);
    return this.http.post(url+'/auth/logout',id); 
  }
//view detail
  viewUserData(id){
    const  url='http://localhost:3000';
    console.log("IN service",id);
    return this.http.get(url+'/products/details/'+id); 
  }

  //add fav
  addFav(data1)
  {
console.log(data1);
const  url='http://localhost:3000';
var currentUser = JSON.parse(localStorage.getItem('currentUser'));
this.token = currentUser && currentUser.token;
const Token =this.token;

this.role_id=currentUser && currentUser.role_id;
console.log("roll id" ,this.role_id);  
  let loginHeaders = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'token': this.token
    })
  }
const data = new FormData();
  data.append('token', JSON.stringify(this.token));
  console.log("IN service",data1);
  console.log("IN service token",data1,Token);
    console.log("IN service",data);
    return this.http.get(url+'/products/addfav/'+data1,loginHeaders); 
  }
  allFav()
  {
   
    const  url='http://localhost:3000';
    var currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.token = currentUser && currentUser.token;
    const Token =this.token;
    
    this.role_id=currentUser && currentUser.role_id;
    console.log("roll id" ,this.role_id);  
      let loginHeaders = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'token': this.token
        })
      }
    const data = new FormData();
      data.append('token', JSON.stringify(this.token));
     
      console.log("IN service token",Token);
        console.log("IN service",data);
        return this.http.get(url+'/products/getfavproducts',loginHeaders); 

  }
  addFavBuyer(data1)
  {
console.log(data1);
const  url='http://localhost:3000';
var currentUser = JSON.parse(localStorage.getItem('currentUser'));
this.token = currentUser && currentUser.token;
const Token =this.token;

this.role_id=currentUser && currentUser.role_id;
console.log("roll id" ,this.role_id);  
  let loginHeaders = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'token': this.token
    })
  }
const data = new FormData();
  data.append('token', JSON.stringify(this.token));
  console.log("IN service",data1);
  console.log("IN service token",data1,Token);
    console.log("IN service",data);
    return this.http.get(url+'/products/addfav/'+data1,loginHeaders); 
  }

  removeFav(data1)
  {
console.log(data1);
const  url='http://localhost:3000';
var currentUser = JSON.parse(localStorage.getItem('currentUser'));
this.token = currentUser && currentUser.token;
const Token =this.token;

this.role_id=currentUser && currentUser.role_id;
console.log("roll id" ,this.role_id);  
  let loginHeaders = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'token': this.token
    })
  }
const data = new FormData();
  data.append('token', JSON.stringify(this.token));
  console.log("IN service",data1);
  console.log("IN service token",data1,Token);
    console.log("IN service",data);
    return this.http.get(url+'/products/removefav/'+data1,loginHeaders); 
  }

  //view one product data
  getOneProduct(id)
  {
    const  url='http://localhost:3000';
    console.log("IN service",id);
    return this.http.get(url+'/products/details/'+id); 

  }
oneUserName()
{

const  url='http://localhost:3000';
var currentUser = JSON.parse(localStorage.getItem('currentUser'));
this.token = currentUser && currentUser.token;
const Token =this.token;

this.role_id=currentUser && currentUser.role_id;
console.log("roll id" ,this.role_id);  
  let loginHeaders = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'token': this.token
    })
  }
const data = new FormData();
  data.append('token', JSON.stringify(this.token));

  console.log("IN service token",Token);
    console.log("IN service",data);
    return this.http.get(url+'/users',loginHeaders); 
  }

}

