import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl = 'https://localhost:5001/api/auth/';
  jwtHelper = new JwtHelperService();
  decodedToken: any;
  values: any;

constructor(private http: HttpClient) { 
  
}

login(model: any) {
  const headerOptions = new HttpHeaders({ 'Content-Type': 'application/json' });
  return this.http.post(this.baseUrl + 'login', model).pipe(
    map((response: any) => {
        const user = response;
        if (user) {
          localStorage.setItem('token', user.token);
          this.decodedToken = this.jwtHelper.decodeToken(user.token);
        }
    })
  );
}

register(model: any) {
  const headerOptions = new HttpHeaders({ 'Content-Type': 'application/json' });
  return this.http.post(this.baseUrl + 'register', model);
}

loggedIn() {
  const token = localStorage.getItem('token');
  if(this.jwtHelper.isTokenExpired(token)){
    localStorage.removeItem('token');
    return false;
  }
  return !this.jwtHelper.isTokenExpired(token);
}

logout(){
  localStorage.removeItem('token');
}

}
