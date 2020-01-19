import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model : any ={};

  constructor(private authService:AuthService) { }

  ngOnInit() {
  }

  login(){
    this.authService.login(this.model).subscribe(next=>{
      console.log("Succefullu logged in");
    },error=>{
      console.log("An error occured");
    });
  }

  // login(){
  //   this.authService.getValues();
  // }

}
