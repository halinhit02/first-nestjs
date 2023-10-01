import { Module } from "@nestjs/common";
import { CompanyFactoryService } from "./company-factory.service";
import { CompanyUseCase } from "./company.use-case";


@Module({
    providers: [CompanyFactoryService, CompanyUseCase],
    exports: [CompanyFactoryService, CompanyUseCase],
})
export class CompanyUseCaseModule { }