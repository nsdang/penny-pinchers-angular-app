import { Component, OnInit } from '@angular/core';
import { SubscriptionService } from '../../services/subscription.service';
import { SubscriptionItem } from '../../models/ISubscriptionItemDetail';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

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
    { id: 3, name: 'Daily' },
  ];
  optionsReminder = [
    { id: 1, name: 'Email' },
    { id: 2, name: 'Phone#' },
  ];

  selectedSubType: number | undefined;
  selectedRecur: number | undefined;
  selectedReminder: number | undefined;

  itemIdFromRoute: string | null | undefined;
  itemDetail!: SubscriptionItem;

  constructor(
    private subscriptionService: SubscriptionService,
    private location: Location,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // First get the product id from the current route.
    const routeParams = this.route.snapshot.paramMap;
    this.itemIdFromRoute = routeParams.get('itemId');

    // Call service for item detail
    this.subscriptionService.getSubscriptionDetail(this.itemIdFromRoute).subscribe((subItem) => {
      this.itemDetail = subItem;
      if(subItem.subscriptionType == "Premium") this.selectedSubType = this.optionsSubType[1].id;
      else this.selectedSubType = this.optionsSubType[0].id;
    });
    this.selectedRecur = this.optionsRecur[1].id;
    this.selectedReminder = this.optionsReminder[1].id;
  }

  onClickBack(): void {
    this.location.back();
  }

  onClickSave(): void {
    const itemId = String(this.itemIdFromRoute);
    this.subscriptionService.updateSubscriptionDetail(itemId, this.itemDetail).subscribe((newItem) => {
      console.log(newItem)
    });
    this.location.back();
  }
}
