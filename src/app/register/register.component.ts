import { Component, OnInit, ViewChild } from '@angular/core';

import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  model: any = {};
  @ViewChild('registerForm', {static: false}) formValues;

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  register() {
    console.log('register');
    this.authService.register(this.model).subscribe(next => {
      console.log('Succefully registered');
    }, error => {
      console.log('An error occured');
    });
    this.formValues.resetForm();
  }


}
