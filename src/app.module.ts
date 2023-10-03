import { Module } from '@nestjs/common';
import { CompanyUseCaseModule } from './use-cases/company/company-use-case.module';
import { CompanyController } from './controllers/company.controller';
import { ProductUseCaseModule } from './use-cases/product/product-use-case.module';
import { ProductController } from './controllers/product.controller';

@Module({
  imports: [CompanyUseCaseModule, ProductUseCaseModule],
  controllers: [CompanyController, ProductController],
})
export class AppModule { }
