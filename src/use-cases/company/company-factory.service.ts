import { Injectable } from "@nestjs/common";
import { randomUUID } from "crypto";
import { CreateCompanyDto, UpdateCompanyDto } from "src/core/dtos/company.dto";
import { Company } from "src/core/entities/company.entity";

@Injectable()
export class CompanyFactoryService {
    createNewCompany(createCompanyDto: CreateCompanyDto) {
        const newCompany = new Company();
        newCompany.id = randomUUID();
        newCompany.name = createCompanyDto.name;
        newCompany.field = createCompanyDto.field;
        newCompany.address = createCompanyDto.address;
        return newCompany;
    }

    updateCompany(updateCompanyDto: UpdateCompanyDto) {
        const updatedCompany = new Company();
        updatedCompany.name = updateCompanyDto.name;
        updatedCompany.field = updateCompanyDto.field;
        updatedCompany.address = updateCompanyDto.address;
        return updatedCompany;
    }
}