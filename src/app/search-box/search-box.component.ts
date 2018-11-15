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
      "search":this.search,
    }
    console.log("hii",body)
    this.Search.searchUserData(body).subscribe(
      error => {
      console.log("error: result...:", error);
     
      //this._router.navigate(['/']); 
    },
    data=>{
      console.log("success: result...:", data.status);
      this.arrUser = data as string [];
    //   if(data.status===201)
    //  {
    //   this._router.navigate(['/search']);
    //  }
     if(data.status===401)
     {
      alert("not found");
     }
    }
    );
  
  
  }
  }


