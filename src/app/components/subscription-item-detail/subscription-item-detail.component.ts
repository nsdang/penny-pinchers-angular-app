import { Component, OnInit } from '@angular/core';
import { SubscriptionService } from '../../services/subscription.service';
import { SubscriptionItem } from '../../models/ISubscriptionItemDetail';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-subscription-item-detail',
  templateUrl: './subscription-item-detail.component.html',
  styleUrls: ['./subscription-item-detail.component.css'],
})
export class SubscriptionItemDetailComponent implements OnInit {
  optionsSubType = ['Trial', 'Standard', 'Premium'];
  optionsRecur = ['Annually', 'Monthly', 'None'];
  optionsReminder = ['Email']; //, 'Phone#'];

  selectedSubType: string | undefined;
  selectedRecur: string | undefined;
  selectedReminder: string | undefined;

  itemIdFromRoute: string | null | undefined;
  userIdFromRoute: string | null | undefined;
  itemDetail!: SubscriptionItem;

  constructor(
    private subscriptionService: SubscriptionService,
    private location: Location,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    // First get the product id from the current route.
    const routeParams = this.route.snapshot.paramMap;
    this.itemIdFromRoute = routeParams.get('itemId');
    this.userIdFromRoute = routeParams.get('userId');

    // Call service for item detail
    this.subscriptionService.getSubscriptionDetail(this.itemIdFromRoute).subscribe((subItem) => {
      this.itemDetail = subItem;
      switch (subItem.subscriptionType){
        case 'Trial':
          this.selectedSubType = this.optionsSubType[0];
          break;
        case 'Standard':
          this.selectedSubType = this.optionsSubType[1];
          break;
        case 'Premium':
          this.selectedSubType = this.optionsSubType[2];
          break;
        default:
          this.selectedSubType = this.optionsSubType[1];
      }

      switch (subItem.recurringOption){
        case 'Annually':
          this.selectedRecur = this.optionsRecur[0];
          break;
        case 'Monthly':
          this.selectedRecur = this.optionsRecur[1];
          break;
        default:
          this.selectedRecur = this.optionsRecur[2];
          break;
      }

      switch (subItem.reminderMethod){
        case 'Phone#':
          this.selectedReminder = this.optionsReminder[1];
          break;
        default:
          this.selectedReminder = this.optionsReminder[0];
          break;
      }
    });
  }

  onClickAbout(): void {
    this.router.navigateByUrl('/about');
  }

  onClickBack(): void {
    this.location.back();
  }

  onClickSave(): void {
    const itemId = String(this.itemIdFromRoute);
    this.subscriptionService.updateSubscriptionDetail(itemId, this.itemDetail).subscribe((newItem) => {
      console.log(newItem)
    });
  }
}
