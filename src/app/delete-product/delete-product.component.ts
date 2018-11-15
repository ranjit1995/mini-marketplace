import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css']
})
export class DeleteProductComponent implements OnInit {
  _location: any;

  constructor(
    public dialogRef: MatDialogRef<DeleteProductComponent>,
    ) {}

    cancel(): void {
    this.dialogRef.close();
    // this._location.back();
  }
  
  delete(): void {
    this.dialogRef.close();
  }
  ngOnInit() {
  }



}
