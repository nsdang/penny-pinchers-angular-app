import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { SubscriptionListService } from '../../services/subscription-list.service'
import { SubscriptionItemModelAngular } from '../../models/ISubscriptionItemModelAngular'


@Component({
  selector: 'app-subscription-list',
  templateUrl: './subscription-list.component.html',
  styleUrls: ['./subscription-list.component.css']
})

export class SubscriptionListComponent implements OnInit {
  userId: string = '';
  items: SubscriptionItemModelAngular[];

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private allItemsService: SubscriptionListService
  ) { 
      this.items = [];
  }

  ngOnInit(): void {
    this.userId = this.route.snapshot.params['userId'];
    this.allItemsService.getSubscriptionItems(this.userId)
    .subscribe(
      result => {
        this.items = result;
      },
    );
  }
}


