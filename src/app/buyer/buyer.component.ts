import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse, HttpClient } from '@angular/common/http';
import { MatIconRegistry, MatDialog } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
@Component({
  selector: 'app-buyer',
  templateUrl: './buyer.component.html',
  styleUrls: ['./buyer.component.css']
})
export class BuyerComponent implements OnInit {

  toggle: boolean;
  status: boolean;
 
          constructor(private httpService: HttpClient,iconRegistry: MatIconRegistry, sanitizer: DomSanitizer,public dialog: MatDialog,private _router: Router) {
            iconRegistry.addSvgIcon(
                'thumbs-up',
                sanitizer.bypassSecurityTrustResourceUrl('../../assets/image/'));
          }
        
         
          
          openDialog()

          {
            let myDiv = document.getElementById('wave1');
            myDiv.style.color = 'red';
            this.status = !this.status;
          }
          
  viewDialog(): void {
    this._router.navigate(['/view-products']); 
    
  }

addUser: any;
city: String;
mobile: Number;
price:number;
discription:string;
arrUser: string [];

    ngOnInit () {
          this.httpService.get('http://192.168.0.37:3000/products').subscribe(
              data => {
                this.arrUser = data as string [];	 // FILL THE ARRAY WITH DATA.
                //  console.log(this.arrBirds[1]);
                console.log("geting");
                console.log("hii",data)
              },
              (err: HttpErrorResponse) => {
                  console.log (err.message);
              }
                );
          }

}


