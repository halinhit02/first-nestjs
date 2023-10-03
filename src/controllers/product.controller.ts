import { Body, Controller, Get, Param, ParseUUIDPipe, Post, Put, Query } from "@nestjs/common";
import { ProductUseCase } from "src/use-cases/product/product.use-case";
import { CreateProductDto, UpdateProductDto } from "src/core/dtos/product.dto";

@Controller('api/product')
export class ProductController {
    constructor(private productUseCase: ProductUseCase) { }

    @Get()
    getByCompany(@Query('companyId') companyId: string) {
        return this.productUseCase.getProducts(companyId);
    }

    @Get('search')
    searchByKeyword(@Query('keyword') keyword: string) {
        return this.productUseCase.searchProduct(keyword);
    }

    @Get(':id')
    getById(@Param('id', ParseUUIDPipe) id: string) {
        return this.productUseCase.getProductById(id);
    }

    @Post()
    create(@Body() createProductDto: CreateProductDto) {
        return this.productUseCase.createProduct(createProductDto);
    }

    @Put(':id')
    update(@Param('id', ParseUUIDPipe) id: string, @Body() updateProductDto: UpdateProductDto) {
        return this.productUseCase.updateProduct(id, updateProductDto);
    }

}