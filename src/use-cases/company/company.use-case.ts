import { Injectable } from "@nestjs/common";
import { CompanyFactoryService } from "./company-factory.service";
import { Company } from "src/core/entities/company.entity";
import { CreateCompanyDto, UpdateCompanyDto } from "src/core/dtos/company.dto";

@Injectable()
export class CompanyUseCase {
    constructor(
        private companyFactoryService: CompanyFactoryService,
    ) { }

    private companies: Company[] = [];

    async getAllCompanies(): Promise<Company[]> {
        return this.companies;
    }

    getCompanyById(id: number): Company {
        if (id >= this.companies.length) {
            return new Company();
        }
        return this.companies[id];
    }

    searchCompanyByName(name: string): Company[] {
        return this.companies.filter((value, index) => value.name.toLowerCase().includes(name.toLowerCase()));
    }

    createCompany(createCompanyDto: CreateCompanyDto) {
        const newCompany = this.companyFactoryService.createNewCompany(createCompanyDto);
        this.companies.push(newCompany);
        return newCompany;
    }

    updateCompany(companyId: number, updateCompanyDto: UpdateCompanyDto): Company {
        const company = this.companyFactoryService.updateCompany(updateCompanyDto);
        this.companies[companyId] = company;
        return company;
    }
}