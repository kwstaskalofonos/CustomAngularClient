import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/_models/User';
import { UserService } from 'src/app/_services/User.service';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { ActivatedRoute } from '@angular/router';
import { CustomMapperService } from 'src/app/_mappers/CustomMapper.service';

@Component({
  selector: 'app-UserDetailed',
  templateUrl: './UserDetailed.component.html',
  styleUrls: ['./UserDetailed.component.css']
})
export class UserDetailedComponent implements OnInit {
  user: User;

  constructor(
    private userService: UserService, 
    private alertify: AlertifyService, 
    private route: ActivatedRoute,
    private customMapper: CustomMapperService) { }

  ngOnInit() {
    this.loadUser();
  }

  loadUser(){
    this.userService.getUser(+this.route.snapshot.params['id']).subscribe((user: User)=>{
      this.user = this.customMapper.SingleProfileMapper(user);
    },error=>{
      this.alertify.error(error);
    });
  }

}
