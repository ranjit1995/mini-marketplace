import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit {
  search: any;
  addUser: any;
  arrUser: string [];
  constructor(private _router: Router,private Search: AuthService) { }

  ngOnInit() {
  }
  searching()
  {
    let body=
    {
      'search':this.search
    }
    this.Search.searchUserData(this.search).subscribe(
      data=>{
        console.log("success: result...:", data);
        this.arrUser = data as string [];
        console.log("0",this.arrUser);
        
       
      }
    ,
      err => {
      console.log("error: result...:", err);
    },
     );
  
  
  }
  }


