import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SubscriptionItemModelAngular } from '../models/ISubscriptionItemModelAngular';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionListService {

  constructor(private http: HttpClient) { }
  url:string = 'http://localhost:8080/';

  getSubscriptionItems(userIndex: string):Observable<SubscriptionItemModelAngular[]> {
    return this.http.get<SubscriptionItemModelAngular[]>( this.url + 'app/item/user/' + userIndex)
  }
}
