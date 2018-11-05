import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-favourite-products',
  templateUrl: './favourite-products.component.html',
  styleUrls: ['./favourite-products.component.css']
})
export class FavouriteProductsComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<FavouriteProductsComponent>,
    ) {}

    cancel(): void {
    this.dialogRef.close();
  }
  registration(): void {
    this.dialogRef.close();
  }
  login(): void {
    this.dialogRef.close();
  }
  ngOnInit() {
  }

}
