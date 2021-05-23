import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { LoginModalComponent } from './login-modal/login-modal.component';
import { SignUpModalComponent } from './sign-up-modal/sign-up-modal.component';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
})
export class WelcomeComponent implements OnInit {
  title: string = 'WELCOME to the SUbscription tracker';
  constructor(private matDialog : MatDialog) {
  }

  openLogInModal() {
    const dialogConfig = new MatDialogConfig();
    let dialogRef = this.matDialog.open(LoginModalComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(result => {
      if(result == "openSignUp") {
        const dialogConfig = new MatDialogConfig();
        this.matDialog.open(SignUpModalComponent, dialogConfig);
      }
    })
    }

  ngOnInit(): void {}
}
