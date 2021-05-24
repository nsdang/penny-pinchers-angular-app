import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { SubscriptionService } from '../../../services/subscription.service';
import { SubscriptionItemModelAngular } from '../../../models/ISubscriptionItemModelAngular'


@Component({
  selector: 'app-subscription-items-table',
  templateUrl: './subscription-items-table.component.html',
  styleUrls: ['./subscription-items-table.component.css']
})
export class SubscriptionItemsTableComponent implements OnInit {
  userId: string = '';
  items: SubscriptionItemModelAngular[];

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private allItemsService: SubscriptionService) { 
      this.items = [];
    }

  ngOnInit(): void {
    this.userId = this.route.snapshot.params['userId'];
    this.allItemsService.getAllSubscriptionItems(this.userId)
    .subscribe(
      result => {
        this.items = result;
      },
    );
  }

}
