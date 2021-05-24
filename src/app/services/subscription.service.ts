import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SubscriptionItem } from '../models/subscriptionItemDetail';
import { SubscriptionItemModelAngular } from '../models/ISubscriptionItemModelAngular';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionService {
  subscriptionUrl:string = 'http://localhost:8080/';

  constructor(private http:HttpClient) { }

  // get a subscription item
  getSubscriptionDetail(index: string):Observable<SubscriptionItem> {
    return this.http.get<SubscriptionItem>(this.subscriptionUrl + 'app/item/' + index);
  }

  // get all subscription items OR the whole list
  getAllSubscriptionItems(userIndex: string):Observable<SubscriptionItemModelAngular[]> {
    return this.http.get<SubscriptionItemModelAngular[]>( this.subscriptionUrl+ 'app/item/user/' + userIndex)
  }

}
