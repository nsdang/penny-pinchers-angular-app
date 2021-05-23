import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.css']
})
export class LoginModalComponent implements OnInit {
  @Output() openSignUpEvent = new EventEmitter<any>();
  email : string;
  password : string; 

  constructor(public dialogRef: MatDialogRef<LoginModalComponent>) 
  { 
    this.email = "";
    this.password = "";
  }

  ngOnInit(): void {
  }

  close() {
    this.dialogRef.close();
  }

  // openSignUpDialog() {
  //   this.dialogRef.close();
  //   this.openSignUpEvent.emit("");
  // }
}
