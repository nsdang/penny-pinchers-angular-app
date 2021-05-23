import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
})
export class WelcomeComponent implements OnInit {
  viewLoginModal: boolean;
  viewSignUpModal: boolean;
  title: string = 'WELCOME to the SUbscription tracker';

  constructor() {
    this.viewSignUpModal = false;
    this.viewLoginModal = false;
  }

  openLogInModal() {
    this.viewLoginModal = true;
    this.viewSignUpModal = false;
  }

  openSignUpModal() {
    this.viewSignUpModal = true;
    this.viewLoginModal = false;
  }

  ngOnInit(): void {}
}
