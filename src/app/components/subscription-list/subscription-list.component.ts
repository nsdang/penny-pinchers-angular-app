import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { SubscriptionService } from '../../services/subscription.service';
import { Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { SubscriptionList} from '../../models/ISubscriptionListDetail';


@Component({
  selector: 'app-subscription-list',
  templateUrl: './subscription-list.component.html',
  styleUrls: ['./subscription-list.component.css']
})

export class SubscriptionListComponent implements OnInit {
  userId!: string;
  listId!: Number;
  listInfo!: SubscriptionList;

  
  constructor(private route: ActivatedRoute,
    private location: Location,
    private allItemsService: SubscriptionService,
    private router: Router) { 
  }

  ngOnInit(): void {
    this.userId = this.route.snapshot.params['userId'];
    this.allItemsService.getListInfo(this.userId)
    .subscribe(
      result => {
        this.listInfo = result;
        this.listId = this.listInfo.listId;
        console.log('list' + this.listId);
      },
    );
  }


  // addNewItem() {
  //   let route = '/addSubscription';
  //   this.router.navigate([route], listId);
  // }
}


