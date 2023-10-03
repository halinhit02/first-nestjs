import { Body, Controller, Get, Param, ParseIntPipe, ParseUUIDPipe, Post, Put, Query } from "@nestjs/common";
import { CreateCompanyDto, UpdateCompanyDto } from "src/core/dtos/company.dto";
import { CompanyUseCase } from "src/use-cases/company/company.use-case";

@Controller('api/company')
export class CompanyController {
    constructor(private companyUseCase: CompanyUseCase) { }

    @Get()
    getAll() {
        return this.companyUseCase.getAllCompanies();
    }

    @Get('search')
    searchByKeyword(@Query('keyword') keyword: string) {
        return this.companyUseCase.searchCompany(keyword);
    }

    @Get(':id')
    getById(@Param('id', ParseUUIDPipe) id: string) {
        return this.companyUseCase.getCompanyById(id);
    }

    @Post()
    create(@Body() companyDto: CreateCompanyDto) {
        return this.companyUseCase.createCompany(companyDto);
    }

    @Put(':id')
    update(@Param('id', ParseUUIDPipe) companyId: string, @Body() updateCompanyDto: UpdateCompanyDto) {
        return this.companyUseCase.updateCompany(companyId, updateCompanyDto);
    }
}