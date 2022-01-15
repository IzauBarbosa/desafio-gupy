import { 
  BadRequestException,
  NotFoundException, 
  Body, 
  Controller, 
  Param,
  Post, 
  Get } from '@nestjs/common';
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

  @Get('get-account-by-email/:accountByEmail')
  public async getAccountByEmail(
    @Param('accountByEmail') accountByEmail: string,
  ): Promise<Account | NotFoundException> {
    const account = await this.service.findOneByEmail(accountByEmail);

    if (!account) {
      throw new NotFoundException(null, `Account with email ${accountByEmail} not exists`);
    }

    return account;
  }
}
