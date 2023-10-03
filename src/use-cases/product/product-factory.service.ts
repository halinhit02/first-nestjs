import { Injectable } from "@nestjs/common";
import { randomUUID } from "crypto";
import { CreateProductDto, UpdateProductDto } from "src/core/dtos/product.dto";
import { Product } from "src/core/entities/product.entity";

@Injectable()
export class ProductFactoryService {
    createNewProduct(createProductDto: CreateProductDto): Product {
        const newProduct = new Product();
        newProduct.id = randomUUID()
        newProduct.name = createProductDto.name;
        newProduct.companyId = createProductDto.companyId;
        newProduct.price = createProductDto.price;
        newProduct.quantity = createProductDto.quantity;
        newProduct.year = createProductDto.year;
        return newProduct;
    }

    updateNewProduct(updateProductDto: UpdateProductDto): Product {
        const updateProduct = new Product();
        updateProduct.name = updateProductDto.name;
        updateProduct.companyId = updateProductDto.companyId;
        updateProduct.price = updateProductDto.price;
        updateProduct.quantity = updateProductDto.quantity;
        updateProduct.year = updateProductDto.year;
        return updateProduct;
    }

}