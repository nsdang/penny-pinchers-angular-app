import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubscriptionListComponent } from './components/subscription-list/subscription-list.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { SubscriptionItemDetailComponent } from './components/subscription-item-detail/subscription-item-detail.component';
import { AboutComponent } from './components/about/about.component';
import { AddSubscriptionItemComponent } from './components/add-subscription-item/add-subscription-item.component';

const routes: Routes = [
  { path: 'home', component: WelcomeComponent },
  { path: 'addSubscription', component: AddSubscriptionItemComponent },
  //{ path: 'addSubscription/:listId', component: AddSubscriptionItemComponent },
  { path: 'subscriptions/:userId', component: SubscriptionListComponent },
  { path: 'subscription/:itemId', component: SubscriptionItemDetailComponent, },
  { path: 'about', component: AboutComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
