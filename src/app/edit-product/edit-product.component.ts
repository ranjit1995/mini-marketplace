import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { runInThisContext } from 'vm';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { AuthService } from '../auth.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  
  show: boolean;
  token: any;
  pName: any;
  discriptions: any;
  Price: any;
  role_id: any;
  users: any;
  id: any;
  name: any;
  description: any;
  price: any;
  quantity: any;
 
  
  constructor(private http: HttpClient,
    private httpService: HttpClient,private _router: Router,
    public dialogRef:MatDialogRef<EditProductComponent>,
     @Inject(MAT_DIALOG_DATA) public data:any, public Auth:AuthService) { 
       if (data)
       {
         
         this.id = data;
        console.log("data of id",this.id);
       }
// initialize variable value
  this.show = false;
  }

  ngOnInit() {
    this.editProduct();
  }
  cancel()
  {
 
    this.dialogRef.close();
  }
 addProduct()
 {
  this._router.navigate(['/add-product']); 
 }
 editProduct()
 {
 this.dialogRef.disableClose = true;
  console.log("inner id",this.id);
  this.Auth.getOneProduct(this.id).subscribe(res => {
    console.log("error: result...:", res[0].status);
  
    this.users = res[0];
    console.log("error: result...:", this.users);

    // this._router.navigate(['/main']); 
    
  },
  err=>{
    console.log("success: result...:", err);
    }
  );
  
 }

 edit(id)
 {
   let body=
   {
    "name":this.users.name,
    "description":this.users.description,
    "price":this.users.price,
    "quantity":this.users.quantity
    
   }
   console.log(body)
  const  url='http://localhost:3000'; 

  var currentUser = JSON.parse(localStorage.getItem('currentUser'));
  this.token = currentUser && currentUser.token;
  const Token =this.token;
  console.log("token" ,Token)
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
    this.httpService.put('http://localhost:3000/products/edit/'+this.id,body,loginHeaders).subscribe(
      data => {
         //  console.log(this.arrBirds[1]);
        console.log("geting");
        alert("edited successfully");
       // this.dialogRef.close();
      //  this.dialogRef.closeAll();
       this._router.navigate(['/main']);
      },

      (err: HttpErrorResponse) => {
        console.log (err.message);
      }
    );
    this.dialogRef.close();
    this.dialogRef.close();
  } 
  
}

