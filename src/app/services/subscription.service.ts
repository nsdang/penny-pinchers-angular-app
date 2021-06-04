import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SubscriptionItem } from '../models/ISubscriptionItemDetail';
import { SubscriptionItemModelAngular } from '../models/ISubscriptionItemModelAngular';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionService {
  subscriptionUrl:string = 'http://pennypinchers.azurewebsites.net/';

  constructor(private http:HttpClient) { }

  // get a subscription item
  getSubscriptionDetail(index: string|null):Observable<SubscriptionItem> {
    if (!index)  return this.http.get<SubscriptionItem>(this.subscriptionUrl + 'app/item/0');
    return this.http.get<SubscriptionItem>(this.subscriptionUrl + 'app/item/' + index);
  }

  // get all subscription items OR the whole list
  getAllSubscriptionItems(userIndex: string):Observable<SubscriptionItemModelAngular[]> {
    return this.http.get<SubscriptionItemModelAngular[]>( this.subscriptionUrl+ 'app/item/user/' + userIndex)
  }

  // update a subscription item
  updateSubscriptionDetail(index: string, newDetail:SubscriptionItem ):Observable<SubscriptionItem> {
    return this.http.put<SubscriptionItem>(this.subscriptionUrl + 'app/item/' + index, newDetail);
  }
}
