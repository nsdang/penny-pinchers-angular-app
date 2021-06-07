import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  userIdFromRoute: string | null | undefined;

  constructor(private _location: Location, private route: ActivatedRoute) {}

  ngOnInit(): void {
    // First get the product id from the current route.
    const routeParams = this.route.snapshot.paramMap;
    this.userIdFromRoute = routeParams.get('userId');
  }

  backClicked() {
    this._location.back();
  }
}
