import { AccountsService } from './accounts.service';
import { LoginService } from './login.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, FormControl, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { AccountsListComponent } from './accounts-list/accounts-list.component';
import { MenuComponent } from './menu/menu.component';
import { AppRoutingModule } from './/app-routing.module';
import {MatTableModule, MatFormFieldModule, MatInputModule, MatCardModule, MatSelectModule, MatOptionModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CreateAccountComponent,
    AccountsListComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatCardModule,
    RouterModule,
    MatSelectModule,
    MatOptionModule,
    ReactiveFormsModule
  ],
  providers: [
    LoginService,
    AccountsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
