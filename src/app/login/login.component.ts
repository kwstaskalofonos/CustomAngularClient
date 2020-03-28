import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model: any = {};
  @ViewChild('loginForm', {static: false}) formValues;

  constructor(private authService: AuthService, private alertify: AlertifyService, private router: Router) { }

  ngOnInit() {
    //console.log(this.loggedIn());
  }

  login() {
    
    this.authService.login(this.model).subscribe(next => {
      this.alertify.success('Succefully logged in');
      this.router.navigate(['/users']);
    }, error => {
      this.alertify.error(error);
    });
    this.formValues.resetForm();  
  }

  loggedIn() {
    return this.authService.loggedIn();
  }

  getUnique_name(){
    return this.authService.decodedToken.unique_name;
  }


}
