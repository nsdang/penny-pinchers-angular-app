import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params, Router  } from '@angular/router';
import { Location } from '@angular/common';
import { SubscriptionService } from '../../../services/subscription.service';
import { SubscriptionItem } from '../../../models/ISubscriptionItemDetail';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DeleteModalComponent }  from './delete-modal/delete-modal.component'


@Component({
  selector: 'app-subscription-items-table',
  templateUrl: './subscription-items-table.component.html',
  styleUrls: ['./subscription-items-table.component.css']
})
export class SubscriptionItemsTableComponent implements OnInit {
  userId: string = '';
  items: SubscriptionItem[];
  response:any;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private allItemsService: SubscriptionService,
    private router: Router,
    private matDialog : MatDialog,
    ) { 
      this.items = [];
    }

  ngOnInit(): void {
    this.userId = this.route.snapshot.params['userId'];
    console.log(this.userId);
    this.allItemsService.getAllSubscriptionItems(this.userId)
    .subscribe(
      result => {
        this.response = result;
        this.response.forEach((element:SubscriptionItem) => {
          this.items.push ({
            serviceName: element.serviceName,
            listId: element.listId,
            itemId: element.itemId,
            addDate: element.addDate,
            dueDate: element.dueDate,
            price: element.price,
            isArchived: element.isArchived,
            subscriptionType: element.subscriptionType,
            recurringOption: element.recurringOption,
            reminderMethod: element.reminderMethod
          });
      });
        
    })
  }

  openDeleteModal(itemId_param:Number) {
    const dialogConfig = new MatDialogConfig();
    let dialogRef = this.matDialog.open(DeleteModalComponent, {
      width: '500px',
      backdropClass: 'custom-dialog-backdrop-class',
      panelClass: 'custom-dialog-panel-class',
      disableClose: true,
      data: { itemId: itemId_param}
    });
    
  }



}



