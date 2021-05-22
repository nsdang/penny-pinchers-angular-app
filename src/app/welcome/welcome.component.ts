import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})

export class WelcomeComponent implements OnInit {
  viewLoginModal : boolean = false;
  viewSignUpModal : boolean = false;

  constructor() {
   }
 
  openLogInModal(){
    this.viewLoginModal = true; 
  }

  ngOnInit(): void {
  }


}
