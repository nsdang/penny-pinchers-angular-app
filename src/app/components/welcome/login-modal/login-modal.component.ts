import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.css']
})
export class LoginModalComponent implements OnInit {
  email : string;
  password : string; 

  constructor() { 
    this.email = "";
    this.password = "";
  }

  ngOnInit(): void {
  }

}
