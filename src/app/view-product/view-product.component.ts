import { Component, OnInit, Inject } from '@angular/core';
import { FavouriteProductsComponent } from '../favourite-products/favourite-products.component';
import { HttpClient } from '@angular/common/http';
import { MatIconRegistry, MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth.service';
import { ViewProductsComponent } from '../view-products/view-products.component';
import { EditProductComponent } from '../edit-product/edit-product.component';
import { DeleteProductComponent } from '../delete-product/delete-product.component';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {
  id: string;
  user: any;


  constructor(iconRegistry: MatIconRegistry, 
    private route:ActivatedRoute,
              sanitizer: DomSanitizer,
              public dialog: MatDialog,
              private _router: Router, 
              private Auth:AuthService,
              private _location: Location,public dialogRef:MatDialogRef<ViewProductsComponent>, @Inject(MAT_DIALOG_DATA) public data:any ) {

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
  console.log("inside api",this.id);
  this.Auth.viewUserData(this.id).subscribe(res => {
   // console.log("error: result...:", res[0].status);
  
    this.user = res[0];
    console.log("error: result...:", this.user);
  
      
  },
  

  err=>{
    console.log("success: result...:", err);
    }
    
  );
}
 
  openDialog(id): void {
    const dialogRef = this.dialog.open(DeleteProductComponent, {
      width: '350px',
      height:'250px',
      data:id
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
     
    });
    
  }
 close()
  {
    this.dialogRef.close();
  }
 
 }
