import { LoginService } from './login.service';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { AccountDto, Account } from './account';
import { UserLoginDto, LoginDto } from './login';

@Injectable({
  providedIn: 'root'
})
export class AccountsService {

  constructor(

  ) { }

  private accountsList: Account[] = [
    {
      id: 1,
      login: "admin",
      password: "admin",
      permission: "Admin"
    },
    {
      id: 2,
      login: "user",
      password: "user",
      permission: "Default User"
    }
  ];

  getUsers(): Observable<Account[]> {
    return of(this.accountsList);
  }

  createAccount(newAccount: Account): string{
    if(this.accountsList.find(account => (account.login === newAccount.login)) != undefined){
      return "Username already exist";
    }

    newAccount.id = this.accountsList[this.accountsList.length - 1].id + 1;
    this.accountsList.push(newAccount);
    return undefined;
  }

  authenticate(user: UserLoginDto): Observable<LoginDto> {
    // console.log(user);
    var authenticatedAccount: LoginDto = new LoginDto();

    let validAccount = this.accountsList.find(account => (account.login === user.login && account.password === user.password));
    // console.log(validAccount);

    if (validAccount != undefined) {
      authenticatedAccount.account.id = validAccount.id;
      authenticatedAccount.account.login = validAccount.login;
      authenticatedAccount.account.permission = validAccount.permission;
      authenticatedAccount.isAuthenticated = true;
      return of(authenticatedAccount);
    }
    
    else{
      return of(new LoginDto());
    }
  }
}
