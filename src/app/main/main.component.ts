import { Component, OnInit, HostListener } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatIconRegistry, MatDialog } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { FavouriteProductsComponent } from '../favourite-products/favourite-products.component';
import { Router } from '@angular/router';
import { HttpErrorResponse, HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieService } from 'angular2-cookie/services/cookies.service';
import { ViewProductsComponent } from '../view-products/view-products.component';
import { AuthService } from '../auth.service';
import { ViewProductComponent } from '../view-product/view-product.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  userFilter: any = { name: '' };
  cookieValue: string ;
  addUser: any;
  city: String;
  mobile: Number;
  price:number;
  discription:string;
  arrUser: string [];
  arrUser1: string []; 
  arrUser2: string [];
  name: any;
url:any;
toggle = true;
status = 'Enable'; 
  token: any;
  role_id: any;
  arrUser3: string[];
  
  
          constructor(private auth:AuthService,private cookies:CookieService,
            private httpService: HttpClient,iconRegistry: MatIconRegistry, 
            sanitizer: DomSanitizer,public dialog: MatDialog,private _router: Router) {
            iconRegistry.addSvgIcon(
                'thumbs-up',
                sanitizer.bypassSecurityTrustResourceUrl('../../assets/image/'));
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
                this.auth.addFav(data).subscribe(
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
          
  viewDialog(): void {
    this._router.navigate(['/view-products']); 
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

// this.getAll();
// this.getFav();
//     }
//     getAll()
//     {
//       var currentUser = JSON.parse(localStorage.getItem('currentUser'));
// this.token = currentUser && currentUser.token;
// const Token =this.token;

// this.role_id=currentUser && currentUser.role_id;
// console.log("roll id" ,this.role_id);  
//   let loginHeaders = {
//     headers: new HttpHeaders({
//         'Content-Type': 'application/json',
//         'token': this.token
//     })
//   }
// const data = new FormData();
//   data.append('token', JSON.stringify(this.token));

//   console.log("IN service token",Token);
//     console.log("IN service",data);

//       const url='http://localhost:3000';
//       this.httpService.get(url+'/products/data',loginHeaders).subscribe(
//       data => {
//           this.arrUser2 = data as string [];	 // FILL THE ARRAY WITH DATA.
//           //  console.log(this.arrBirds[1]);
//           console.log("geting");
            
//           console.log("hii all products",data);

//       },

//       (err: HttpErrorResponse) => {
//           console.log (err.message);
//       });
//     }
// getFav()
// {
//   const url='http://localhost:3000';
//   var currentUser = JSON.parse(localStorage.getItem('currentUser'));
// this.token = currentUser && currentUser.token;
// const Token =this.token;

// this.role_id=currentUser && currentUser.role_id;
// console.log("roll id" ,this.role_id);  
//   let loginHeaders = {
//     headers: new HttpHeaders({
//         'Content-Type': 'application/json',
//         'token': this.token
//     })
//   }
// const data = new FormData();
//   data.append('token', JSON.stringify(this.token));

//   console.log("IN service token",Token);
//     console.log("IN service",data);

//   this.httpService.get(url+'/products/getfavproducts',loginHeaders).subscribe(
//   data => {
//       this.arrUser3 = data as string [];	 // FILL THE ARRAY WITH DATA.
//       //  console.log(this.arrBirds[1]);
//       console.log("geting");
        
//       console.log("hii",data);

//   },

//   (err: HttpErrorResponse) => {
//       console.log (err.message);
//   });


// }

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
        const dialogRef = this.dialog.open(ViewProductComponent, {
        height: 'auto',
        width: '1100px',
        data: id
  });

  dialogRef.afterClosed().subscribe(result => {
    
        console.log('The dialog was closed');
        this.name = result;
      });
  } 
 
}
