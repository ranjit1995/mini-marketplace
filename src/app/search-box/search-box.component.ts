import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit {
  search: any;
  constructor(private _router: Router) { }

  ngOnInit() {
  }
  searching()
  {
    let body=
    {
      "search":this.search,
    }
    console.log("hii",body)
  }

}
