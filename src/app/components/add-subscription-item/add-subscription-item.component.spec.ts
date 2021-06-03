import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSubscriptionItemComponent } from './add-subscription-item.component';

describe('AddSubscriptionItemComponent', () => {
  let component: AddSubscriptionItemComponent;
  let fixture: ComponentFixture<AddSubscriptionItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSubscriptionItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSubscriptionItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
