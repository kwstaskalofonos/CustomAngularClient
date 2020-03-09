import { Component, OnInit, ViewChild } from '@angular/core';

import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  model: any = {};
  @ViewChild('registerForm', {static: false}) formValues;

  constructor(private authService: AuthService, private alertify: AlertifyService) { }

  ngOnInit() {
  }

  register() {
    
    this.authService.register(this.model).subscribe(next => {
      this.alertify.success('Succefully registered');
    }, error => {
      this.alertify.error(error);
    });
    
    this.formValues.resetForm();
  }


}
