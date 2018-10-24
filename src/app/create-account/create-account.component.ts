import { FormControl, Validators, NgModel, FormGroupDirective, NgForm } from '@angular/forms';
import { Account } from './../account';
import { Component, OnInit, QueryList, ViewChildren, ViewChild } from '@angular/core';
import { LoginService } from '../login.service';
import { AccountsService } from '../accounts.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {

  constructor(

    private loginService: LoginService,
    private accountsService: AccountsService,
    private activatedRoute: ActivatedRoute,
    private router: Router

  ) { }

  permission = new FormControl('', [Validators.required]);
  login = new FormControl('', [Validators.required]);
  password = new FormControl('', [Validators.required]);
  error = new FormControl('', []);

  account: Account = new Account();

  ngOnInit() {
    this.loginService.checkAuthentication();
  }

  registerNewAccount() {
    if (this.loginService.getLoggedUser().account.permission != "Admin") {
      this.error.setErrors({ OnlyAdminsCanCreateNewAccounts: true });
    }
    else if (this.permission.errors == undefined && this.login.errors == undefined && this.password.errors == undefined) {
      let error = this.accountsService.createAccount(this.account);
      if (error != undefined) {
        this.error.setErrors({ UsernameAlreadyExist: true });
      }
      else {
        this.router.navigate(['success']);
        setTimeout(() => {
          this.router.navigate(['create-account']);
        }, 3000);
      }
    }
  }

}
