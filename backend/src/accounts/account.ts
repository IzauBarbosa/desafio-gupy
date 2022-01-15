import { AccountTypeEnum } from './account.enums';

interface AccountParams {
  id?: number;
  name: string;
  email: string;
  password: string;
  type: AccountTypeEnum;
}

export class Account {
  public id?: number;
  public name: string;
  public email: string;
  public password: string;
  public type: AccountTypeEnum;

  constructor({ id, name, email, password, type }: AccountParams) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.password = password;
    this.type = type;
  }
}
