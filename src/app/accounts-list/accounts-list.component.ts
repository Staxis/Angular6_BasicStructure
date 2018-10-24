import { AccountsService } from './../accounts.service';
import { AccountDto } from './../account';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from './../login.service';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';


@Component({
  selector: 'app-accounts-list',
  templateUrl: './accounts-list.component.html',
  styleUrls: ['./accounts-list.component.css']
})
export class AccountsListComponent implements OnInit {

  constructor(

    private loginService: LoginService,
    private accountsService: AccountsService

  ) { }

  displayedColumns: string[] = ['id', 'login', 'permission'];
  dataSource: any;
  accountsList: AccountDto[];

  ngOnInit() {
    this.loginService.checkAuthentication();
    this.accountsService.getUsers().subscribe(accountsList => this.accountsList = accountsList);
    this.dataSource = new MatTableDataSource(this.accountsList);
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}