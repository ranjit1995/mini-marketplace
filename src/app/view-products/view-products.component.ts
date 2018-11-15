import { Component, OnInit } from '@angular/core';
import { FavouriteProductsComponent } from '../favourite-products/favourite-products.component';
import { MatIconRegistry, MatDialog } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { DeleteProductComponent } from '../delete-product/delete-product.component';
import {EditProductComponent} from '../edit-product/edit-product.component';
@Component({
  selector: 'app-view-products',
  templateUrl: './view-products.component.html',
  styleUrls: ['./view-products.component.css']
})
export class ViewProductsComponent implements OnInit {
  id: string;


  constructor(iconRegistry: MatIconRegistry, 
    private route:ActivatedRoute,
              sanitizer: DomSanitizer,
              public dialog: MatDialog,
              private _router: Router, 
              private _location: Location) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');

  }

  getProductById(){
    
  }
  deleteDialog(): void {
    const dialogRef = this.dialog.open(DeleteProductComponent, {
      width: '350px',
      height:'250px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
     
    });
    
  }
  editDialog(): void {
    const dialogRef = this.dialog.open(EditProductComponent, {
      width: 'auto',
      height:'auto',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
     
    });
    
  }
  back()
  {
    this._location.back();
  }
}
