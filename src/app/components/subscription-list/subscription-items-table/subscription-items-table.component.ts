import { Component, OnInit } from '@angular/core';
import ISubscriptionListModelAngular from '../../../models/ISubscriptionListModelAngular';

@Component({
  selector: 'subscription-items-table',
  templateUrl: './subscription-items-table.component.html',
  styleUrls: ['./subscription-items-table.component.css']
})
export class SubscriptionItemsTableComponent implements OnInit {
  items : ISubscriptionListModelAngular[] = [];
  
  constructor() { }

  ngOnInit(): void {
  }

}
