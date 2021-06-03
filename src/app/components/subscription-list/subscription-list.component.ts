import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { SubscriptionService } from '../../services/subscription.service';
import { SubscriptionItemModelAngular } from '../../models/ISubscriptionItemModelAngular'
import { Router } from '@angular/router';


@Component({
  selector: 'app-subscription-list',
  templateUrl: './subscription-list.component.html',
  styleUrls: ['./subscription-list.component.css']
})

export class SubscriptionListComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private location: Location,
    private allItemsService: SubscriptionService,
    private router: Router) { }

  ngOnInit(): void {
  }

  addNewItem() {
    let route = '/addSubscription';
    this.router.navigate([route]);
  }
}


