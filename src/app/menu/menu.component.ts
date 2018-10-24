import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(
    private loginService: LoginService
  ) { }

  selectedItem: any;
  loggedUser: string;

  ngOnInit() {
    this.loggedUser = this.loginService.getLoggedUser().account.login;
  }

  listClick(item) {
    // console.log(item);

    if(item == "logout"){
      this.loginService.logout();
    }

    this.selectedItem = item;  // don't forget to update the model here
    // ... do other stuff here ...
}
}
