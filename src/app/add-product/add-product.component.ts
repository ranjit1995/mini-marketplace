import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

 

  show: boolean;
  
  pName: any;
  
  discriptions: any;
  Price: any;
  quantities: any;
  descriptions: any;
  
  constructor(private _router: Router,private createUser: AuthService) { 
// initialize variable value
    this.show = false;
  }

  ngOnInit() {
  }
  viewpass()
  {
    this.show = !this.show;
  }

  email = new FormControl('', [Validators.required, Validators.email, Validators.minLength(2)]);
  discription= new FormControl('', [Validators.required,Validators.minLength(5)]);
price=new FormControl('', [Validators.required,Validators.minLength(1)]);
quantity=new FormControl('', [Validators.required,Validators.minLength(1)]);
name=new FormControl('', [Validators.required,Validators.minLength(3)]);
  role: any;
  
  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a valid product name' :
        this.email.hasError('email') ? 'Not a valid product name' :'';
  }
  getErrorMessage1() {
    return this.email.hasError('required') ? 'You must enter at list 3 character' :
        this.email.hasError('name') ? 'Not a valid name' :'';
      }
      getErrorMessage2() {
        return this.email.hasError('required') ? 'Quantity should be not zero' :
            this.email.hasError('name') ? 'Not a valid name' :'';
      }
      getErrorMessage3() {
        return this.email.hasError('required') ? 'price should not be blank' :
        this.email.hasError('name') ? 'Not a valid price' :'';
      }
      getErrorMessage4() {
        return this.email.hasError('required') ? 'You must enter at list 5 character' :
        this.email.hasError('name') ? 'Not a valid Discription' :'';
      }
  addproduct() {
    let body = {
      "name":this.pName,
      "price":this.Price,
      "quantity":this.quantities,
      "description":this.descriptions,
    }
    console.log("Raw data",body);
    this.createUser.addProduct(body).subscribe(
      data=>{
        console.log("success: result data added",data);
        alert("successfully added");
        this._router.navigate(['/main']);
       },
      
      error => {
      console.log("error: result...:", error);
      if(error.status===204)
      {
       alert("invalid data");
       this._router.navigate(['/add-product']); 
      }if(error.status===201)
      {
      
       this._router.navigate(['/main']); 
      }
    }
    );
    

  }
  cancel()
  {
    this._router.navigate(['/main']);
  }
 addProduct()
 {
  this._router.navigate(['/add-product']); 
 }
 editProduct()
 {
  this._router.navigate(['/edit-product']); 
 }
}
