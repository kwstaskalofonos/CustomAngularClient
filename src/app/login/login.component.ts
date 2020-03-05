import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model: any = {};
  @ViewChild('loginForm', {static: false}) formValues;

  registerMode = false;

  constructor(private authService: AuthService, private alertify: AlertifyService) { }

  ngOnInit() {
    //console.log(this.loggedIn());
  }

  login() {
    
    this.authService.login(this.model).subscribe(next => {
      this.alertify.success('Succefully logged in');
    }, error => {
      this.alertify.error(error);
    });
    this.formValues.resetForm();  
  }

  loggedIn() {
    return this.authService.loggedIn();
  }

  registerToggle() {
    this.registerMode = !this.registerMode;
  }

  getUnique_name(){
    return this.authService.decodedToken.unique_name;
  }


}
