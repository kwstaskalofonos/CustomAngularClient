import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl = "https://localhost:5001/api/auth/";
  values: any;

constructor(private http: HttpClient) { 
  
}

login(model:any){
  const headerOptions = new HttpHeaders({ 'Content-Type': 'application/json' });
  return this.http.post(this.baseUrl+'login',model).pipe(
    map((response: any)=>{
        const user = response;
        if(user){
          localStorage.setItem('token', user.token);
        }
    })
  );
}

loggedIn(){
  const token = localStorage.getItem('token');
  return !!token;
}

}
