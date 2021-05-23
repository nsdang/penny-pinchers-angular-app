import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscriptionItemDetailComponent } from './subscription-item-detail.component';

describe('SubscriptionItemDetailComponent', () => {
  let component: SubscriptionItemDetailComponent;
  let fixture: ComponentFixture<SubscriptionItemDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubscriptionItemDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubscriptionItemDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
