import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { SubscriptionListComponent } from './subscription-list/subscription-list.component';
import { SubscriptionItemComponent } from './subscription-list/subscription-item/subscription-item.component';
import { LoginModalComponent } from './welcome/login-modal/login-modal.component';
import { SignUpModalComponent } from './welcome/sign-up-modal/sign-up-modal.component';
import { SubscriptionItemsTableComponent } from './subscription-list/subscription-items-table/subscription-items-table.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    SubscriptionListComponent,
    SubscriptionItemComponent,
    LoginModalComponent,
    SignUpModalComponent,
    SubscriptionItemsTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
