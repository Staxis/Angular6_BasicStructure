import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { AccountsListComponent } from './accounts-list/accounts-list.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot([
      { path: '', redirectTo: '/login', pathMatch: 'full' },
      { path: 'login', component: LoginComponent },
      { path: 'create-account', component: CreateAccountComponent },
      { path: 'account-list', component: AccountsListComponent }
  ])
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }