import { ActivatedRoute, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { UserLoginDto, LoginDto } from './login';
import { AccountsService } from './accounts.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private accountService: AccountsService,
    private activatedRoute: ActivatedRoute,
    private router: Router
    
    ) { }

  private loggedUser: LoginDto = new LoginDto();

  getLoggedUser(): LoginDto {
    return this.loggedUser;
  }

  isUserAuthenticated(): Boolean {
    return this.loggedUser.isAuthenticated;
  }

  checkAuthentication(){
    if (!this.loggedUser.isAuthenticated){
      this.router.navigate(['']);
    }
  }

  login(user: UserLoginDto): Observable<boolean> {

    // console.log(user);
    this.accountService.authenticate(user)
      .subscribe(account => {
        this.loggedUser = (account != undefined) ? account : new LoginDto();
        // console.log(this.loggedUser);
      });

    return of(this.loggedUser.isAuthenticated);
  }

  logout(){
    this.loggedUser = new LoginDto();
    this.router.navigate(['']);
  }

}
