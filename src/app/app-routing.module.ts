import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './_guards/auth.guard';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { MessagesComponent } from './messages/messages.component';
import { FriendsComponent } from './friends/friends.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './Users/Users.component';
import { UserDetailedComponent } from './Users/UserDetailed/UserDetailed.component';
import { UserDetailResolver } from './_resolvers/user-detail.resolver';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {
    path: '',
    runGuardsAndResolvers: 'always',
    canActivate: [AuthGuard],
    children: [
      {path: 'messages', component: MessagesComponent},
      {path: 'friends', component: FriendsComponent},
      {path: 'users', component: UsersComponent},
      {path: 'users/:id', component: UserDetailedComponent, resolve: {user: UserDetailResolver}}
    ]
  },
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
