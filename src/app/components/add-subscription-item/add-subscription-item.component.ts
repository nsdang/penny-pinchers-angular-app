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

  itemIdFromRoute: string | null | undefined;
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
    // initialize formGroup
    this.newItemDetail = {
      itemId : -1,
      addDate : new Date(),
      serviceName: "",
      listId : 1, //should get from route
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

    // First get the product id from the current route.
    const routeParams = this.route.snapshot.paramMap;
    this.itemIdFromRoute = routeParams.get('itemId');

    // Call service for item detail
  //   this.subscriptionService.getSubscriptionDetail(this.itemIdFromRoute).subscribe((subItem) => {
  //     this.itemDetail = subItem;
  //     switch (subItem.subscriptionType){
  //       case 'Trial':
  //         this.selectedSubType = this.optionsSubType[0];
  //         break;
  //       case 'Standard':
  //         this.selectedSubType = this.optionsSubType[1];
  //         break;
  //       case 'Premium':
  //         this.selectedSubType = this.optionsSubType[2];
  //         break;
  //       default:
  //         this.selectedSubType = this.optionsSubType[3];
  //     }

  //     switch (subItem.recurringOption){
  //       case 'Annually':
  //         this.selectedRecur = this.optionsRecur[0];
  //         break;
  //       case 'Premium':
  //         this.selectedRecur = this.optionsRecur[2];
  //         break;
  //       default:
  //         this.selectedRecur = this.optionsRecur[1];
  //         break;
  //     }

  //     switch (subItem.reminderMethod){
  //       case 'Phone#':
  //         this.selectedReminder = this.optionsReminder[1];
  //         break;
  //       default:
  //         this.selectedReminder = this.optionsReminder[0];
  //         break;
  //     }
  //   });
  }


  onClickBack(): void {
    this.location.back();
  }

  onClickSave(): void {
    const itemId = String(this.itemIdFromRoute);

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
    this.onClickBack();
  }
}


