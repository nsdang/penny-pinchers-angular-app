import { Component, OnInit } from '@angular/core';
import { SubscriptionService } from '../../services/subscription.service';
import { SubscriptionItem } from '../../models/subscriptionItemDetail';

@Component({
  selector: 'app-subscription-item-detail',
  templateUrl: './subscription-item-detail.component.html',
  styleUrls: ['./subscription-item-detail.component.css'],
})
export class SubscriptionItemDetailComponent implements OnInit {

  optionsSubType = [
    { id: 1, name: 'Standard' },
    { id: 2, name: 'Premium' },
  ];
  optionsRecur = [
    { id: 1, name: 'Annually' },
    { id: 2, name: 'Monthly' },
    { id: 1, name: 'Daily' },
  ];
  optionsReminder = [
    { id: 1, name: 'Email' },
    { id: 2, name: 'Phone#' },
  ];

  selectedSubType: number | undefined;
  selectedRecur: number | undefined;
  selectedReminder: number | undefined;

  itemDetail!: SubscriptionItem;

  constructor(private subscriptionService: SubscriptionService) {
    // private itemService: ItemService,
  }

  ngOnInit(): void {
    this.subscriptionService.getSubscriptionDetail('1').subscribe(subItem => {
      this.itemDetail = subItem;
    });
    this.selectedSubType = this.optionsSubType[0].id;
    this.selectedRecur = this.optionsRecur[1].id;
    this.selectedReminder = this.optionsReminder[1].id;
  }
}
