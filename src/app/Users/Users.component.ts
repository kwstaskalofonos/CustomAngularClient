import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/User.service';
import { User, Profile } from '../_models/User';
import { AlertifyService } from '../_services/alertify.service';
import { Observable } from 'rxjs';
import { CustomMapperService } from '../_mappers/CustomMapper.service';

@Component({
  selector: 'app-Users',
  templateUrl: './Users.component.html',
  styleUrls: ['./Users.component.css']
})
export class UsersComponent implements OnInit {

  users: User[];
  firstname: string;

  constructor(private userService: UserService, private alertify: AlertifyService, private customMapper: CustomMapperService) { }

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    this.userService.getUsers().subscribe((users: User[])=>{
      //console.log(users);
      this.users = this.customMapper.ProfileMapper(users);
    }, error => {
      this.alertify.error(error);
    })
  }

}
