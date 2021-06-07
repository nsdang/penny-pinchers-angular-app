import { Component, OnInit } from '@angular/core';
import { ValidationErrors, FormGroup, AsyncValidatorFn, FormBuilder, Validators, AbstractControl, FormControl, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { SubscriptionService } from '../../services/subscription.service';
import { SubscriptionItem } from '../../models/ISubscriptionItemDetail';
import { formatDate } from '@angular/common';


@Component({
  selector: 'app-add-subscription-item',
  templateUrl: './add-subscription-item.component.html',
  styleUrls: ['./add-subscription-item.component.css']
})
export class AddSubscriptionItemComponent implements OnInit {
  optionsSubType = ['Trial', 'Standard', 'Premium', 'None'];
  optionsRecur = ['Annually', 'Monthly', 'Daily'];
  optionsReminder = ['Email', 'Phone#'];

  selectedSubType: string | undefined;
  selectedRecur: string | undefined;
  selectedReminder: string | undefined;

  listIdFromRoute: string | null | undefined;
  userIdFromRoute: string | null | undefined;
  itemDetail!: SubscriptionItem;

  newItemDetail!: SubscriptionItem;

  formInput!: FormGroup;


  constructor(
    private subscriptionService: SubscriptionService,
    private location: Location,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    this.userIdFromRoute = routeParams.get('userId');
    this.listIdFromRoute = routeParams.get('listId');

    // initialize formGroup
    this.newItemDetail = {
      itemId : -1,
      addDate : new Date(),
      serviceName: "",
      listId : this.route.snapshot.params['listId'],
      dueDate: new Date(),
      price: 0,
      isArchived : false,
      subscriptionType: "Standard",
      recurringOption: "Monthly",
      reminderMethod: "Email"
    };


    this.formInput = new FormGroup ({
      serviceName: new FormControl(''),
      price: new FormControl(0),
      subscriptionType: new FormControl(''),
      subscribedDay: new FormControl(''),
      recurringOption: new FormControl(''),
      reminderMethod: new FormControl('')
    });

  

    
  }


  onClickBack(): void {
    this.location.back();
  }

  onClickSave(): void {
    console.log(this.formInput.controls)

    this.newItemDetail.serviceName = this.formInput.controls.serviceName.value;
    this.newItemDetail.price = this.formInput.controls.price.value;
    this.newItemDetail.dueDate = this.formInput.controls.subscribedDay.value;
    this.newItemDetail.subscriptionType = this.formInput.controls.subscriptionType.value;
    this.newItemDetail.recurringOption = this.formInput.controls.recurringOption.value;
    this.newItemDetail.reminderMethod = this.formInput.controls.reminderMethod.value;

    this.subscriptionService.createNewSubscription(this.newItemDetail).subscribe((newItem) => {
      console.log(newItem)
    });
  }
}


