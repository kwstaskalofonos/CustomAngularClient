import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/User.service';
import { User } from '../_models/User';
import { AlertifyService } from '../_services/alertify.service';

@Component({
  selector: 'app-Users',
  templateUrl: './Users.component.html',
  styleUrls: ['./Users.component.css']
})
export class UsersComponent implements OnInit {

  users: User[];

  constructor(private userService: UserService, private alertify: AlertifyService) { }

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    this.userService.getUsers().subscribe((users: User[])=>{
      this.users = users;
      console.log(this.users);
    }, error =>{
      this.alertify.error(error);
    })
  }

}
