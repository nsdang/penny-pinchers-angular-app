import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { SubscriptionItem } from '../models/ISubscriptionItemDetail';
import { SubscriptionList} from '../models/ISubscriptionListDetail';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionService {
  subscriptionUrl:string = 'http://localhost:8080/';
  // subscriptionUrl:string = 'https://pennypinchers.azurewebsites.net/';

  httpOptions = {
    observe:'body',
    withCredentials:true,
    headers:new HttpHeaders().append('Content-Type','application/json')
  };

  constructor(private http:HttpClient) { }

  // get a subscription item
  getSubscriptionDetail(index: string|null):Observable<SubscriptionItem> {
    if (!index)  return this.http.get<SubscriptionItem>(this.subscriptionUrl + 'app/item/0');
    return this.http.get<SubscriptionItem>(this.subscriptionUrl + 'app/item/' + index);
  }

  // //get all subscription items OR the whole list
  getAllSubscriptionItems(userIndex: string):Observable<SubscriptionItem[]>{
    return this.http.get<SubscriptionItem[]>(this.subscriptionUrl+ 'app/item/user/' + userIndex);
  }

  
  // update a subscription item
  updateSubscriptionDetail(index: string, newDetail:SubscriptionItem ):Observable<SubscriptionItem> {
    return this.http.put<SubscriptionItem>(this.subscriptionUrl + 'app/item/' + index, newDetail);
  }

  // create new subscription
  createNewSubscription(newDetail:SubscriptionItem):Observable<SubscriptionItem> {
    return this.http.post<SubscriptionItem>(this.subscriptionUrl + 'app/item/',newDetail);
  }

  // delete a subscription
  deleteSubscription(itemIndex:Number):Observable<SubscriptionItem> {
    return this.http.delete<SubscriptionItem>(this.subscriptionUrl+'app/item/' + itemIndex);
  }

  // get List infor
  getListInfo(userId:string):Observable<SubscriptionList>{
    return this.http.get<SubscriptionList>(this.subscriptionUrl+'app/list/user/' + userId);
  }
}

