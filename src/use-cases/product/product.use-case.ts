import { Injectable } from "@nestjs/common";
import { ProductFactoryService } from "./product-factory.service";
import { Product } from "src/core/entities/product.entity";
import { Company } from "src/core/entities/company.entity";
import { CreateProductDto, UpdateProductDto } from "src/core/dtos/product.dto";

@Injectable()
export class ProductUseCase {
    constructor(private productFactoryService: ProductFactoryService) { }

    private products: Product[] = [];

    getProducts(companyId: string): Product[] {
        return this.products.filter((value, index) => value.companyId === companyId);
    }

    getProductById(productId: string): Product {
        return this.products.find((value, index) => value.id == productId);
    }

    searchProduct(keyword: string): Product[] {
        return this.products.filter((value, index) => value.name.toLowerCase().includes(keyword.toLowerCase()));
    }

    createProduct(createProductDto: CreateProductDto): Product {
        const newProduct = this.productFactoryService.createNewProduct(createProductDto);
        this.products.push(newProduct);
        return newProduct;
    }

    updateProduct(productId: string, updateProductDto: UpdateProductDto): Product {
        const updatedProduct = this.productFactoryService.updateNewProduct(updateProductDto);
        updatedProduct.id = productId;
        const index: number = this.products.findIndex((value, index) => value.id === productId);
        this.products[index] = updatedProduct;
        return updatedProduct;
    }
}