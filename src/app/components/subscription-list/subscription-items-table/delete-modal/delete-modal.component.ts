import { Component, OnInit, Optional, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-delete-modal',
  templateUrl: './delete-modal.component.html',
  styleUrls: ['./delete-modal.component.css']
})
export class DeleteModalComponent implements OnInit {
  itemId!: Number;
 
  constructor(public dialogRef: MatDialogRef<DeleteModalComponent>,
    ) { }

  ngOnInit(): void {
    
  }

  onNoClick(): void {
    this.dialogRef.close();
  }


 
 

  

  

}
