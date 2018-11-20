import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse, HttpClient } from '@angular/common/http';
import { MatIconRegistry, MatDialog } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ViewProductsComponent } from '../view-products/view-products.component';
import { CookieService } from 'angular2-cookie/services/cookies.service';
import { ViewProductComponent } from '../view-product/view-product.component';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-buyer',
  templateUrl: './buyer.component.html',
  styleUrls: ['./buyer.component.css']
})
export class BuyerComponent implements OnInit {
  userFilter: any = { name: '' };
  toggle = true;
  status = 'Enable'; 
  cookieValue: string ;
  addUser: any;
  city: String;
  mobile: Number;
  price:number;
  discription:string;
  arrUser: string [];
  arrUser1: string [];
  name: any;
url:any;
  
          constructor(private cookies:CookieService,private httpService: HttpClient,
            iconRegistry: MatIconRegistry, sanitizer: DomSanitizer,
            public dialog: MatDialog,private _router: Router, public auth:AuthService) {
            iconRegistry.addSvgIcon(
                'thumbs-up',
                sanitizer.bypassSecurityTrustResourceUrl('../../assets/image/'));
          }
        
         
          
           openDialog(data)

          {
            this.toggle = !this.toggle;
            this.status = this.toggle ? 'Enable' : 'Disable';
            console.log("data form fav",data);
            if(!this.toggle)
            {
            let myDiv = document.getElementById('fav'+data);
            myDiv.style.color = 'red';
            this.auth.addFav(data).subscribe(
              data=>{
                console.log("success: result...:", data);
                
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
            this.auth.removeFav(data).subscribe(
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
          
  viewDialog(id): void {
    
      console.log(id);
      const dialogRef = this.dialog.open(ViewProductsComponent, {
        height: '450px',
        width: '1100px',
        data: id
      });
    
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
        
      });
    }
 


    ngOnInit () {
      const url='http://localhost:3000';
      this.httpService.get(url+'/products').subscribe(
      data => {
          this.arrUser = data as string [];	 // FILL THE ARRAY WITH DATA.
          //  console.log(this.arrBirds[1]);
          console.log("geting");
            
          console.log("hii",data);

      },

      (err: HttpErrorResponse) => {
          console.log (err.message);
      });

  }
getCookies(){
  alert(this.cookies.get('test'));
  this.cookieValue = this.cookies.get('test');
  var retrievedData = localStorage.getItem('currentUser'); 
  var v1 = JSON.parse(retrievedData);
  this.arrUser1 =v1 as string [] ;
  console.log('hi data',retrievedData)
  alert(retrievedData);
}
viewProducts(id): void {
      console.log(id);
      const dialogRef = this.dialog.open(ViewProductsComponent, {
      height: '450px',
      width: '1100px',
      data: id
});

dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.name = result;
    });
} 
}


