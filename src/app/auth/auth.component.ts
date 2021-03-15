import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {

  authStatus: boolean = false;
  errorMsgUser: String = "";

  constructor(private router: Router) { }

  onLogin(form: NgForm) {
    this.errorMsgUser = "";
    const username = form.value['username'];
    const password = form.value['password'];

    //simple verification avec admin-admin
    if(username === "admin" && password === "admin"){
      this.authStatus = true;
      this.router.navigate(['home']);
    } else {
      this.errorMsgUser = "Une des informations est incorrecte, réessayez svp";
    }
  }
}
