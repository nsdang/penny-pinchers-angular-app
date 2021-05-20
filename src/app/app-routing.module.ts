import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // { path: '', component: WelcomeComponent },
  // { path: 'subscriptionList/:userId', component: ListsComponent },
  // { path: 'subscriptionItem/:itmeId', component: ItemComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
