import { Component, OnInit, Inject } from '@angular/core';
import { FavouriteProductsComponent } from '../favourite-products/favourite-products.component';
import { MatIconRegistry, MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { DeleteProductComponent } from '../delete-product/delete-product.component';
import {EditProductComponent} from '../edit-product/edit-product.component';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-view-products',
  templateUrl: './view-products.component.html',
  styleUrls: ['./view-products.component.css']
})
export class ViewProductsComponent implements OnInit {
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
    console.log("success: result...:", res[0].status);
  
    this.user = res[0];
  // this.user=res
   console.log("success: result...:", this.user);
   console.log("success: result...:", res);
  
      
  },
  

  err=>{
    console.log("error: result...:", err);
    }
    
  );
}
 
delete(id): void {
  console.log("deletes",id)
  this.Auth.delete(this.id).subscribe(
    data=>{
      console.log("success: result...:", data);
      alert("deleted");
      this._router.navigate(['/main']);
     },
    
    error => {
    console.log("error: result...:", error);

  }
  );
  
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
