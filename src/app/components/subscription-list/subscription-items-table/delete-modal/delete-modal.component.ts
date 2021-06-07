import { Component, OnInit, Optional, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SubscriptionService } from '../../../../services/subscription.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-delete-modal',
  templateUrl: './delete-modal.component.html',
  styleUrls: ['./delete-modal.component.css']
})
export class DeleteModalComponent implements OnInit {
  itemId!: Number;
 
  constructor(public dialogRef: MatDialogRef<DeleteModalComponent>,
    private subscriptionService:SubscriptionService,
    private router: Router,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any) { 
      this.itemId = data.itemId;
    
    }

  ngOnInit(): void {
    
  }

  onClickDelete () {
    this.subscriptionService.deleteSubscription(this.itemId); // not work

    console.log(this.itemId + '2');
    this.onClickAbout(); // not work
  }

  onClickAbout(): void {
    this.router.navigateByUrl('/about');
  }

 
 

  

  

}
