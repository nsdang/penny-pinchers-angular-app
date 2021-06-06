import { Component, OnInit } from '@angular/core';
import { SubscriptionService } from '../../services/subscription.service';
import { SubscriptionItem } from '../../models/ISubscriptionItemDetail';
import { SubscriptionItemModelAngular } from '../../models/ISubscriptionItemModelAngular'
import { SubscriptionItemDetailComponent } from '../subscription-item-detail/subscription-item-detail.component';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  name: string = 'Profile Page'.toUpperCase();
  items: SubscriptionItemModelAngular[];
  totalSubscriptionsCount: number;
  totalTrialSubscriptionsCount: number;
  totalPremiumSubscriptionsCount: number;
  totalStandardSubscriptionsCount: number;
  itemIdFromRoute: string | null | undefined;
  itemDetail!: SubscriptionItem;
  userId!: string;
  listId!: number;
  count: number = 0;

  constructor(
    private allItemsService: SubscriptionService,
    private subscriptionService: SubscriptionService,
    private location: Location,
    private route: ActivatedRoute,
    private router: Router )
  {
    this.items = [];
    this.totalSubscriptionsCount = this.getTotalSubscriptionsCount();
    this.totalTrialSubscriptionsCount = this.getTotalTrialSubscriptionsCount();
    this.totalPremiumSubscriptionsCount = this.getTotalPremiumSubscriptionsCount();
    this.totalStandardSubscriptionsCount = this.getTotalStandardSubscriptionsCount();
  }

  ngOnInit(): void {
  }

  getTotalSubscriptionsCount(): number{
    return this.allItemsService.getAllSubscriptionItems.length;
  }

  getTotalTrialSubscriptionsCount(): number
  {
     // First get the product id from the current route.
     const routeParams = this.route.snapshot.paramMap;
     this.itemIdFromRoute = routeParams.get('itemId');
 
     // Call service for item detail
     this.subscriptionService.getSubscriptionDetail(this.itemIdFromRoute).subscribe((subItem) => {
       this.itemDetail = subItem;
     },
    
    this.userId = this.route.snapshot.params['userId']);
    this.allItemsService.getAllSubscriptionItems(this.userId)
    .subscribe(
      result => {
        this.items = result;
      },
    );

      for(let i = 0; i < this.items.length; i++){
        if(this.itemDetail.subscriptionType == 'Trial'){
          this.count++;
        }
      }
    return this.count;
  }

  getTotalStandardSubscriptionsCount(): number
  {
     // First get the product id from the current route.
     const routeParams = this.route.snapshot.paramMap;
     this.itemIdFromRoute = routeParams.get('itemId');
 
     // Call service for item detail
     this.subscriptionService.getSubscriptionDetail(this.itemIdFromRoute).subscribe((subItem) => {
       this.itemDetail = subItem;
     },
    
    this.userId = this.route.snapshot.params['userId']);
    this.allItemsService.getAllSubscriptionItems(this.userId)
    .subscribe(
      result => {
        this.items = result;
      },
    );

      for(let i = 0; i < this.items.length; i++){
        if(this.itemDetail.subscriptionType == 'Standard'){
          this.count++;
        }
      }
    return this.count;
  }

  getTotalPremiumSubscriptionsCount(): number
  {
     // First get the product id from the current route.
     const routeParams = this.route.snapshot.paramMap;
     this.itemIdFromRoute = routeParams.get('itemId');
 
     // Call service for item detail
     this.subscriptionService.getSubscriptionDetail(this.itemIdFromRoute).subscribe((subItem) => {
       this.itemDetail = subItem;
     },
    
    this.userId = this.route.snapshot.params['userId']);
    this.allItemsService.getAllSubscriptionItems(this.userId)
    .subscribe(
      result => {
        this.items = result;
      },
    );

      for(let i = 0; i < this.items.length; i++){
        if(this.itemDetail.subscriptionType == 'Premium'){
          this.count++;
        }
      }
    return this.count;
  }
}
