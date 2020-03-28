import { Injectable } from '@angular/core';
import { User, Profile, Photo } from '../_models/User';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CustomMapperService {

constructor(private route: ActivatedRoute) { }

ProfileMapper(users: User[]): User[]{
  for(var i=0; i<users.length; i++){
    users[i].ProfilesListDto = new Profile(
      users[i]["profile"]["firstName"],
      users[i]["profile"]["surName"],
      users[i]["profile"]["dateOfBirth"],
      users[i]["profile"]["gender"],
      users[i]["profile"]["age"],
      users[i]["profile"]["city"],
      users[i]["profile"]["postalCode"],
      users[i]["profile"]["phoneNumber"]
    );
    users[i].ProfilesListDto.PhotoListDto = new Photo(users[i]["profile"]["profilePhoto"]["url"]);
    delete users[i]["profile"];
  }
  return users;
}

}
