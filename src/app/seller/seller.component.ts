import { Component, OnInit } from '@angular/core';
import { CookieService } from 'angular2-cookie/services/cookies.service';
import { HttpErrorResponse, HttpClient } from '@angular/common/http';
import { MatIconRegistry, MatDialog } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { ViewProductsComponent } from '../view-products/view-products.component';
import { ViewProductComponent } from '../view-product/view-product.component';

@Component({
  selector: 'app-seller',
  templateUrl: './seller.component.html',
  styleUrls: ['./seller.component.css']
})
export class SellerComponent implements OnInit {
  arrUser: string[];
  toggle = true;
  status = 'Enable';
  constructor(private cookies:CookieService,private httpService: HttpClient,
    iconRegistry: MatIconRegistry, sanitizer: DomSanitizer,public dialog: MatDialog,
    private _router: Router,private getFav:AuthService, public Auth:AuthService) { }

  ngOnInit() {
    this.allFav();
  }
allFav()
{
  this.getFav.allFav().subscribe(
    data=>{
      console.log("success: result...:", data);
      this.arrUser = data as string [];
    }
  ,
    err => {
    console.log("error: result...:", err);
  },
   );


}
viewProducts(id): void {
  console.log(id);
  const dialogRef = this.dialog.open(ViewProductComponent, {
    height: 'auto',
    width: '1100px',
    data: id
  });

  dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed');
    
  });
}

openDialog(data)

          {
            this.toggle = !this.toggle;
            this.status = this.toggle ? 'Enable' : 'Disable';
            console.log("data form fav",data);
            if(!this.toggle){
                console.log("inside of fav");
                let myDiv = document.getElementById('fav'+data);
                myDiv.style.color = 'red';
                this.Auth.addFav(data).subscribe(
                  data=>{
                    console.log("success: result...:", data);
                    //this._router.navigate(['/main']);
                    },
                  error => {
                  console.log("error: result...:", error);
                }
                );
                console.log("my div",myDiv);
            }
            else{
              let myDiv = document.getElementById('fav'+data);
              myDiv.style.color = 'gray';
              this.Auth.removeFav(data).subscribe(
              data=>{
                  console.log("success: result...:", data);
                //this._router.navigate(['/main']);
               },
              error => {
                  console.log("error: result...:", error);
              }
              );
              console.log("my div",myDiv);
            }
           
          }
          

userFilter: any = { name: '' };
}
