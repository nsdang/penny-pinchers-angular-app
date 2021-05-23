import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SubscriptionItem } from '../models/subscriptionItemDetail';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionService {
  subscriptionUrl:string = 'http://localhost:8080/';

  constructor(private http:HttpClient) { }

  getSubscriptionDetail(index: string):Observable<SubscriptionItem> {
    return this.http.get<SubscriptionItem>(this.subscriptionUrl + 'app/item/' + index);
  }
}
