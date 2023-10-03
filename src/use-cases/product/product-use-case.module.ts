import { Module } from '@nestjs/common'
import { ProductFactoryService } from './product-factory.service';
import { ProductUseCase } from './product.use-case';

@Module({
    providers: [
        ProductFactoryService, ProductUseCase],
    exports: [ProductFactoryService, ProductUseCase],
})
export class ProductUseCaseModule { }