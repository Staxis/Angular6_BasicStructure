import { AccountDto } from "./account";

export class LoginDto {
  account: AccountDto = new AccountDto();
  isAuthenticated: boolean = false;
}

export class UserLoginDto {
  login: string;
  password: string;
}