import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { TestComponentComponent } from './test-component/test-component.component';
import { NavComponent } from './nav/nav.component';
import { AdminNavComponent } from './admin-nav/admin-nav.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { LoginComponent } from './login/login.component';

@NgModule({
   declarations: [
      AppComponent,
      TestComponentComponent,
      NavComponent,
      AdminNavComponent,
      AdminPanelComponent,
      LoginComponent
   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      FormsModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
