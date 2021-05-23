import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubscriptionListComponent } from './components/subscription-list/subscription-list.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { SubscriptionItemDetailComponent } from './components/subscription-item-detail/subscription-item-detail.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'list/:userId', component: SubscriptionListComponent },
  { path: 'itemDetail', component: SubscriptionItemDetailComponent },
  // { path: 'subscriptionItem/:itmeId', component: ItemComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
