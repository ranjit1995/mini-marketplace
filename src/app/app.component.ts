import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
//import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit{
  title = 'mini-marketplace';
  //cookieValue = 'UNKNOWN';

  constructor(public snackBar: MatSnackBar, ) {}

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }
  ngOnInit(): void {
    
  }
}
