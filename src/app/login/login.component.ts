import { LoginService } from './../login.service';
import { Component, OnInit } from '@angular/core';
import { AccountDto } from '../account';
import { LoginDto, UserLoginDto } from '../login';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, Validators, FormGroupDirective, NgForm } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(

    private loginService: LoginService,
    private activatedRoute: ActivatedRoute,
    private router: Router

  ) { }

  loginData: UserLoginDto = new UserLoginDto();

  login = new FormControl('', [Validators.required]);
  password = new FormControl('', [Validators.required]);
  loginFail = new FormControl('', []);

  ngOnInit() {
    if(this.loginService.getLoggedUser().isAuthenticated){
      this.router.navigate(['account-list']);
    }
  }

  loginOnApp() {
    if (this.login.errors == undefined && this.password.errors == undefined) {
      this.loginService.login(this.loginData)
        .subscribe(isAuthenticated => {
          if (isAuthenticated) {
            // console.log("isAuthenticated");
            this.router.navigate(['account-list']);
          }
          else{
            this.loginFail.setErrors({wrongLoginOrPassword: true});
          }
        });
    }
  }
}
