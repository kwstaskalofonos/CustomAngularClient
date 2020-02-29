import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  LoginMode = false;
  @Output() enterLoginMode = new EventEmitter();

  constructor(private authService: AuthService, private alertify: AlertifyService) { }

  ngOnInit() {
  }

  loggedIn() {
    return this.authService.loggedIn();
  }

  logout() {
    localStorage.removeItem('token');
    this.alertify.message('logged out');
  }

  loginToggle() {
    this.LoginMode = !this.LoginMode;
  }

  enterLogin() {
    this.enterLoginMode.emit(true);
  }

  quitLogin() {
    this.enterLoginMode.emit(false);
  }

}
