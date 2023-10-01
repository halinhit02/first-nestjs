import { Company } from "./company.entity";

export class Product {
    name: string;
    company: Company;
    quantity: number;
    price: number;
    year: number;
}