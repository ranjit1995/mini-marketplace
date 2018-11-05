import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { MatIconRegistry } from '@angular/material';
import { MatDialog } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { FavouriteProductsComponent } from '../favourite-products/favourite-products.component';

export interface PeriodicElement {
  name: string;
  position: number;
  price: number;
  
}
const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Radmi 5pro', price: 10079},
  {position: 2, name: 'Radmi 4A', price: 4079},
  {position: 3, name: 'Radmi 5', price: 12079},
  {position: 4, name: 'Radmi 6A', price: 5979},
  {position: 5, name: 'Radmi 5A', price: 6079},
  {position: 6, name: 'Samsung 5S', price: 11079},
  {position: 7, name: 'Samsung 6S', price: 16079},
  {position: 8, name: 'Samsung 7S', price: 17079},
  {position: 9, name: 'Samsung 6S', price: 16079},
  {position: 10, name: 'Samsung 7S', price: 17079},
  
];
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export  class HomeComponent implements OnInit {

  
  displayedColumns: string[] = ['position', 'name', 'price'];
  dataSource = ELEMENT_DATA;

  email = new FormControl('', [Validators.required, Validators.email]);
  name = new FormControl('', [Validators.required,Validators.minLength(3)]);
  address = new FormControl('', [Validators.minLength(3), Validators.minLength(3)]);

  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
        this.email.hasError('email') ? 'Not a valid email' :'';
      }
      getErrorMessage1() {
        return this.email.hasError('required') ? 'You must enter a 3 digit' :
            this.email.hasError('name') ? 'Not a valid name' :'';
          }
          constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer,public dialog: MatDialog) {
            iconRegistry.addSvgIcon(
                'thumbs-up',
                sanitizer.bypassSecurityTrustResourceUrl('../../assets/image/'));
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
  ngOnInit() {
  }

}


/** @title Form field with error messages */