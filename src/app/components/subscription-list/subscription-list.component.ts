import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { SubscriptionService } from '../../services/subscription.service';
import { SubscriptionItemModelAngular } from '../../models/ISubscriptionItemModelAngular'
import { Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';


@Component({
  selector: 'app-subscription-list',
  templateUrl: './subscription-list.component.html',
  styleUrls: ['./subscription-list.component.css']
})

export class SubscriptionListComponent implements OnInit {
  userId!: string | null;
  listId!: number;

  
  constructor(private route: ActivatedRoute,
    private location: Location,
    private allItemsService: SubscriptionService,
    private router: Router) { 
  }

  ngOnInit(): void {
    this.userId = this.route.snapshot.paramMap.get('userId')
  }


  // addNewItem() {
  //   let route = '/addSubscription';
  //   this.router.navigate([route], listId);
  // }
}


