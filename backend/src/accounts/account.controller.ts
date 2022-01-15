import { 
  BadRequestException,
  NotFoundException, 
  Body, 
  Controller,
  Post } from '@nestjs/common';
import { Account } from './account';
import { AccountDTO } from './account.dto';
import { AccountService } from './account.service';

@Controller('accounts')
export class AccountController {
  constructor(private service: AccountService) {}

  @Post('create-account')
  public async createAnAccount(
    @Body() body: AccountDTO,
  ): Promise<Account | BadRequestException> {
    const accountExisted = await this.service.findOneByEmail(body.email);

    if (accountExisted) {
      return accountExisted;
    }

    return this.service.create(new Account(body));
  }

  @Post('login')
  public async login(
    @Body() body: { email: string, password: string },
  ): Promise<Account | NotFoundException> {
    const account = await this.service.findOneByEmailAndPassword(body.email, body.password);

    if (!account) {
      throw new NotFoundException(null, `Account not exists`);
    }

    return account;
  }
}
