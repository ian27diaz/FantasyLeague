import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  show: boolean;
  constructor(private activatedRoute: ActivatedRoute,
              private router: Router) { }
  ngOnInit() {
    console.log(this.router.url + "\n" + JSON.stringify(this.activatedRoute.url));
    this.show = (this.router.url.match('authentication')) ? false : true;
  }

}
