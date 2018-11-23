import { Component, OnInit, EventEmitter, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog, MatIconRegistry } from '@angular/material';

import { HttpHeaders, HttpClient } from '@angular/common/http';
import { AuthService } from '../auth.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css']
})
export class DeleteProductComponent implements OnInit {
  id: any;
  users: any;
  
  constructor(iconRegistry: MatIconRegistry, 
    private route:ActivatedRoute,
              sanitizer: DomSanitizer,
              public dialog: MatDialog,
              private _router: Router, 
              private Auth:AuthService,
              private _location: Location,public dialogRef:MatDialogRef<DeleteProductComponent>, @Inject(MAT_DIALOG_DATA) public data:any ) {

                if(data){
                  this.id = data;
                  console.log(this.id);
                }
              }


  ngOnInit() {
this.deleteProducts();
  }
  deleteProducts()
 {
  console.log("inner id",this.id);
  this.Auth.getOneProduct(this.id).subscribe(res => {
    console.log("error: result...:", res[0]);
  
    this.users = res[0];
    console.log("error: result...:", this.users);

    this._router.navigate(['/main']); 
  },
  err=>{
    console.log("success: result...:", err);
    }
  );
  
 }

  delete(id): void {
    this.dialogRef.disableClose = true;
    console.log("deletes",id)
    this.Auth.delete(this.users.id).subscribe(
      data=>{
        console.log("success: result...:", data);
        this._router.navigate(['/main']);
       },
      
      error => {
      console.log("error: result...:", error);

    }
    );
    
    this.dialogRef.close();


  }
  
  cancel()
  {
    this.dialogRef.close();
  }  

}
