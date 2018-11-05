import { Component, OnInit } from '@angular/core';
import { FavouriteProductsComponent } from '../favourite-products/favourite-products.component';
import { MatIconRegistry, MatDialog } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-products',
  templateUrl: './view-products.component.html',
  styleUrls: ['./view-products.component.css']
})
export class ViewProductsComponent implements OnInit {


  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer,public dialog: MatDialog,private _router: Router) { }

  ngOnInit() {
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(FavouriteProductsComponent, {
      width: '350px',
      height:'250px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
     
    });
    
  }
}
