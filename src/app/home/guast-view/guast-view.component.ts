import { Component, OnInit, Inject } from '@angular/core';
import { MyFavouriteComponent } from 'src/app/buyer/my-favourite/my-favourite.component';
import { MatDialog, MatIconRegistry, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { EditProductComponent } from 'src/app/edit-product/edit-product.component';
import { FavouriteProductsComponent } from '../../favourite-products/favourite-products.component';
import { DomSanitizer } from '@angular/platform-browser';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { DeleteProductComponent } from '../../delete-product/delete-product.component';
import { AuthService } from '../../auth.service';
import { CookieService } from 'angular2-cookie/services/cookies.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-guast-view',
  templateUrl: './guast-view.component.html',
  styleUrls: ['./guast-view.component.css']
})
export class GuastViewComponent implements OnInit {

  id: string;
  user: any;
  toggle = true;
  status = 'Enable'; 

  constructor( 
    private route:ActivatedRoute,
              sanitizer: DomSanitizer,
              public dialog: MatDialog,
              private cookies:CookieService,
            private httpService: HttpClient,iconRegistry: MatIconRegistry,
              private _router: Router, 
              private Auth:AuthService,
              private _location: Location,public dialogRef:MatDialogRef<GuastViewComponent>,
               @Inject(MAT_DIALOG_DATA) public data:any ) {

                if(data){
                  this.id = data;
                  console.log(this.id);
                }
              }

  ngOnInit() {
    this.viewProducts();
  
  }
viewProducts()
{
  this.dialogRef.disableClose = true;
  console.log("inside api",this.id);
  this.Auth.viewUserData(this.id).subscribe(res => {
    console.log("success: result...:", res[0].status);
  
   this.user = res[0];
   //this.user=res
   console.log("success: result...:", this.user);
   console.log("success: result...:", res);
  
      
  },
  

  err=>{
    console.log("error: result...:", err);
    }
    
  );
}
viewDialog(): void {
    const dialogRef = this.dialog.open(FavouriteProductsComponent, {
      width: '350px',
      height:'250px',
      
    });
    
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
    var retrievedData = localStorage.getItem('currentUser'); 
    console.log('hi data',retrievedData),
    console.log("id is");
    // alert(retrievedData);]
    this.dialogRef.close();

  }
  
  editDialog(id): void {
    const dialogRef = this.dialog.open(EditProductComponent, {
      width: '400px',
      height:'440px',
      data:id
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed',id);
    });
    var retrievedData = localStorage.getItem('currentUser'); 
    console.log('hi data',retrievedData),
    console.log("id is",id);
    // alert(retrievedData);
  }
 close()
  {
    this.dialogRef.close();
  }
 }

