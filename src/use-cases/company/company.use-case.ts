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

    getCompanyById(id: string): Company {
        return this.companies.find((value, index) => value.id == id);
    }

    searchCompany(keyword: string): Company[] {
        return this.companies.filter((value, index) => value.name.toLowerCase().includes(keyword.toLowerCase()));
    }

    createCompany(createCompanyDto: CreateCompanyDto) {
        const newCompany = this.companyFactoryService.createNewCompany(createCompanyDto);
        this.companies.push(newCompany);
        return newCompany;
    }

    updateCompany(companyId: string, updateCompanyDto: UpdateCompanyDto): Company {
        const updatedCompany = this.companyFactoryService.updateCompany(updateCompanyDto);
        updatedCompany.id = companyId;
        const companyIndex: number = this.companies.findIndex((value, index) => value.id === companyId);
        this.companies[companyIndex] = updatedCompany;
        return updatedCompany;
    }
}