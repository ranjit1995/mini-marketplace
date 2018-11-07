import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  show: boolean;
  
  pName: any;
  
  discriptions: any;
  Price: any;
  
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

  email = new FormControl('', [Validators.required, Validators.email, Validators.minLength(2)]);
  discription= new FormControl('', [Validators.required,Validators.minLength(5)]);
price=new FormControl('', [Validators.required,Validators.minLength(1)]);
quentity=new FormControl('', [Validators.required,Validators.minLength(1)]);
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
        return this.email.hasError('required') ? 'Quentity should be not zero' :
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
  addUser() {
    let body = {
      "product_name":this.pName,
      "price":this.Price,
      "quentity":this.quentity,
      "discription":this.discriptions,
    }
    console.log("Raw data",body);
  }
  cancel()
  {
    this._router.navigate(['/home']);
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
