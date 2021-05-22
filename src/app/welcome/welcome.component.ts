import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})

export class WelcomeComponent implements OnInit {
  viewLoginModal : boolean;
  viewSignUpModal : boolean;

  constructor() {
    this.viewSignUpModal = false;
    this.viewLoginModal = false; 
   }
 
  openLogInModal(){
    this.viewLoginModal = true; 
  }

  openSignUpModal() {
    this.viewSignUpModal = true; 
  }

  ngOnInit(): void {
  }


}
