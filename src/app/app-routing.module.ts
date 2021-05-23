import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubscriptionListComponent } from './subscription-list/subscription-list.component'


const routes: Routes = [
  //{ path: '', component: WelcomeComponent },
   { path: 'list', component: SubscriptionListComponent },
  // { path: 'subscriptionItem/:itmeId', component: ItemComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
