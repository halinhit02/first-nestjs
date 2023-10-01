import { Injectable } from "@nestjs/common";
import { CreateCompanyDto, UpdateCompanyDto } from "src/core/dtos/company.dto";
import { Company } from "src/core/entities/company.entity";

@Injectable()
export class CompanyFactoryService {
    createNewCompany(createCompanyDto: CreateCompanyDto) {
        const newCompany = new Company();
        newCompany.name = createCompanyDto.name;
        newCompany.field = createCompanyDto.field;
        newCompany.address = createCompanyDto.address;
        return newCompany;
    }

    updateCompany(updateCompany: UpdateCompanyDto) {
        const newCompany = new Company();
        newCompany.name = updateCompany.name;
        newCompany.field = updateCompany.field;
        newCompany.address = updateCompany.address;
        return newCompany;
    }
}