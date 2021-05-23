import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscriptionItemsTableComponent } from './subscription-items-table.component';

describe('SubscriptionItemsTableComponent', () => {
  let component: SubscriptionItemsTableComponent;
  let fixture: ComponentFixture<SubscriptionItemsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubscriptionItemsTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubscriptionItemsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
