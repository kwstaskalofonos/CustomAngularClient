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
    this.authService.logout();
    this.alertify.message('logged out');
  }

  loginToggle() {
    this.LoginMode = !this.LoginMode;
  }

  getUnique_name() {
    return this.authService.decodedToken.unique_name;
  }

}
