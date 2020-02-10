import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model: any = {};
  @ViewChild('loginForm', {static: false}) formValues;

  registerMode = false;

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  login() {
    console.log('login function');
    this.authService.login(this.model).subscribe(next => {
      console.log('Succefullu logged in');
    }, error => {
      console.log('An error occured');
    });
    this.formValues.resetForm();
  }

  loggedIn() {
    return this.authService.loggedIn();
  }

  logout() {
    localStorage.removeItem('token');
    console.log('logged out');
  }

  registerToggle() {
    this.registerMode = !this.registerMode;
  }


}
