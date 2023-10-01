import { Module } from '@nestjs/common';
import { CompanyUseCaseModule } from './use-cases/company/company-use-case.module';
import { CompanyController } from './controllers/company.controller';

@Module({
  imports: [CompanyUseCaseModule],
  controllers: [CompanyController],
})
export class AppModule { }
