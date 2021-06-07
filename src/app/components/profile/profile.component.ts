import { Component, OnInit } from '@angular/core';
import { SubscriptionService } from '../../services/subscription.service';
import { SubscriptionItem } from '../../models/ISubscriptionItemDetail';
import { SubscriptionItemDetailComponent } from '../subscription-item-detail/subscription-item-detail.component';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../../models/IUserDetail';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  name: string = 'Profile Page'.toUpperCase();

  items: SubscriptionItem[];
  totalSubscriptionsCount: number;
  totalTrialSubscriptionsCount: number;
  totalPremiumSubscriptionsCount: number;
  totalStandardSubscriptionsCount: number;

  userIdFromRoute: string | null | undefined;
  userDetail!: User;
  
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
         // First get the product id from the current route.
         const routeParams = this.route.snapshot.paramMap;
         this.userIdFromRoute = routeParams.get('userId');

         this.subscriptionService.getUserInfo(this.userIdFromRoute).subscribe((user) => {
           this.userDetail = user;
         })

        this.allItemsService.getAllSubscriptionItems(this.userIdFromRoute)
        .subscribe(
          result => {
            this.items = result;
            this.totalSubscriptionsCount = this.getTotalSubscriptionsCount();
            this.totalTrialSubscriptionsCount = this.getTotalTrialSubscriptionsCount();
            this.totalPremiumSubscriptionsCount = this.getTotalPremiumSubscriptionsCount();
            this.totalStandardSubscriptionsCount = this.getTotalStandardSubscriptionsCount();
          },
        );
  }

  getTotalSubscriptionsCount(): number{
    return this.items.length;
  }

  getTotalTrialSubscriptionsCount(): number
  {
    this.count = 0;
      for(let i = 0; i < this.items.length; i++){
        if(this.items[i].subscriptionType == 'Trial'){
          this.count++;
        }
      }
    return this.count;
  }

  getTotalStandardSubscriptionsCount(): number
  {
    this.count = 0;
      for(let i = 0; i < this.items.length; i++){
        if(this.items[i].subscriptionType == 'Standard'){
          this.count++;
        }
      }
    return this.count;
  }

  getTotalPremiumSubscriptionsCount(): number
  {
    this.count = 0;
      for(let i = 0; i < this.items.length; i++){
        if(this.items[i].subscriptionType == 'Premium'){
          this.count++;
        }
      }
    return this.count;
  }
}
