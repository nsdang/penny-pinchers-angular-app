import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { SubscriptionListComponent } from './components/subscription-list/subscription-list.component';
import { LoginModalComponent } from './components/welcome/login-modal/login-modal.component';
import { SignUpModalComponent } from './components/welcome/sign-up-modal/sign-up-modal.component';
import { AboutComponent } from './components/about/about.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { HashLocationStrategy, PathLocationStrategy, LocationStrategy } from '@angular/common';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatInputModule } from '@angular/material/input';
import { MatSelectChange, MatSelectModule } from '@angular/material/select';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { SubscriptionItemDetailComponent } from './components/subscription-item-detail/subscription-item-detail.component';
import { SubscriptionItemsTableComponent } from './components/subscription-list/subscription-items-table/subscription-items-table.component';
import { MatListModule } from '@angular/material/list';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { AddSubscriptionItemComponent } from './components/add-subscription-item/add-subscription-item.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProfileComponent } from './components/profile/profile.component';
import { DeleteModalComponent } from './components/subscription-list/subscription-items-table/delete-modal/delete-modal.component';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    SubscriptionListComponent,
    LoginModalComponent,
    SignUpModalComponent,
    SubscriptionItemDetailComponent,
    SubscriptionItemsTableComponent,
    AboutComponent,
    AddSubscriptionItemComponent,
    NavbarComponent,
    ProfileComponent,
    DeleteModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,

    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatExpansionModule,
    MatDialogModule,
    MatFormFieldModule,
    MatCardModule,
    MatMenuModule,
    MatInputModule,
    MatSelectModule,
    MatGridListModule,
    MatDatepickerModule,
    MatMomentDateModule,
    MatListModule,
    MatCheckboxModule
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent],
})
export class AppModule {}
