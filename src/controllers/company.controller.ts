import { Body, Controller, Get, Param, ParseIntPipe, Post, Put, Query } from "@nestjs/common";
import { CreateCompanyDto, UpdateCompanyDto } from "src/core/dtos/company.dto";
import { CompanyUseCase } from "src/use-cases/company/company.use-case";

@Controller('api/company')
export class CompanyController {
    constructor(private companyUseCase: CompanyUseCase) { }

    @Get()
    getAll() {
        return this.companyUseCase.getAllCompanies();
    }

    @Get('/search')
    searchByName(@Query('keyword') keyword: string) {
        return this.companyUseCase.searchCompanyByName(keyword);
    }

    @Get(':id')
    getById(@Param('id', ParseIntPipe) id: number) {
        return this.companyUseCase.getCompanyById(id);
    }

    @Post()
    create(@Body() companyDto: CreateCompanyDto) {
        return this.companyUseCase.createCompany(companyDto);
    }

    @Put()
    update(@Param('id', ParseIntPipe) companyId: number, @Body() updateCompanyDto: UpdateCompanyDto) {
        return this.companyUseCase.updateCompany(companyId, updateCompanyDto);
    }
}