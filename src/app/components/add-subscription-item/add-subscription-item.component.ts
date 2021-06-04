import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-subscription-item',
  templateUrl: './add-subscription-item.component.html',
  styleUrls: ['./add-subscription-item.component.css']
})
export class AddSubscriptionItemComponent implements OnInit {
  optionsSubType = ['Trial', 'Standard', 'Premium', 'None'];
  optionsRecur = ['Annually', 'Monthly', 'Daily'];
  optionsReminder = ['Email', 'Phone#'];



  constructor() { }

  ngOnInit(): void {
  }

}
