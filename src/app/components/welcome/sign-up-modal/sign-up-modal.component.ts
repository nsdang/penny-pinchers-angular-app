import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-sign-up-modal',
  templateUrl: './sign-up-modal.component.html',
  styleUrls: ['./sign-up-modal.component.css'],
})
export class SignUpModalComponent implements OnInit {
  constructor(public dialogRef : MatDialogRef<SignUpModalComponent>) {}

  close() {
    this.dialogRef.close();
  }
  
  ngOnInit(): void {}
}


