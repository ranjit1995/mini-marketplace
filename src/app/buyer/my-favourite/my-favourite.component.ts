import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse, HttpClient, HttpHeaders } from '@angular/common/http';
import { MatIconRegistry, MatDialog } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { CookieService } from 'angular2-cookie/services/cookies.service';
import { ViewProductsComponent } from 'src/app/view-products/view-products.component';

@Component({
  selector: 'app-my-favourite',
  templateUrl: './my-favourite.component.html',
  styleUrls: ['./my-favourite.component.css']
})
export class MyFavouriteComponent implements OnInit {
  userFilter: any = { name: '' };
  toggle = true;
status = 'Enable'; 
  token: any;
  role_id: any;
 
          constructor(private httpService: HttpClient,
            iconRegistry: MatIconRegistry,
             sanitizer: DomSanitizer,
             public dialog: MatDialog,private _router: Router,
            public getFav:AuthService,
            private cookies:CookieService,) {
            iconRegistry.addSvgIcon(
                'thumbs-up',
                sanitizer.bypassSecurityTrustResourceUrl('../../assets/image/'));
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
       

addUser: any;
city: String;
mobile: Number;
price:number;
discription:string;
arrUser: string [];

    ngOnInit () {
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
    
back()
{
  this._router.navigate(['/buyer']);
}
}
