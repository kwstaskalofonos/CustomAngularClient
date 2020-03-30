import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { TestComponentComponent } from './test-component/test-component.component';
import { NavComponent } from './nav/nav.component';
import { AdminNavComponent } from './admin-nav/admin-nav.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './_services/auth.service';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ErrorInterceptorProvider } from './_services/error.interceptor';
import { BsDropdownModule } from 'ngx-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MessagesComponent } from './messages/messages.component';
import { FriendsComponent } from './friends/friends.component';
import { UsersComponent } from './Users/Users.component';
import { UsercardComponent } from './Users/usercard/usercard.component'
import { JwtModule } from '@auth0/angular-jwt';
import { UserDetailedComponent } from './Users/UserDetailed/UserDetailed.component';

export function tokenGetter() {
   return localStorage.getItem('token');
}

@NgModule({
   declarations: [
      AppComponent,
      TestComponentComponent,
      NavComponent,
      AdminNavComponent,
      AdminPanelComponent,
      LoginComponent,
      RegisterComponent,
      HomeComponent,
      MessagesComponent,
      FriendsComponent,
      UsersComponent,
      UsercardComponent,
      UserDetailedComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      FormsModule,
      BrowserAnimationsModule,
      BsDropdownModule.forRoot(),
      JwtModule.forRoot({
         config: {
            tokenGetter: tokenGetter,
            whitelistedDomains:['localhost:5001'],
            blacklistedRoutes:['localhost:5001/api/auth']
         }
      })
   ],
   providers: [
      AuthService,
      ErrorInterceptorProvider
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
