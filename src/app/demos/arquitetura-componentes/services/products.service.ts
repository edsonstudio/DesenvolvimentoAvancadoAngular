import { Product } from '../models/product';
import { Injectable } from "@angular/core";

@Injectable()
export class ProductsService {

    products: Product[];

    constructor() {
        this.products = [
            {
                id: 1,
                name: "Nike Shoes Green",
                price: 1500.9,
                promo: false,
                pricePromo: 0,
                image: "tenis01.png",
                active: false
            },
            {
                id: 2,
                name: "Nike Shoes Blue",
                price: 1500.9,
                promo: true,
                pricePromo: 990.9,
                image: "tenis02.png",
                active: true
            },
            {
                id: 3,
                name: "Nike Shoes Pink",
                price: 1500.9,
                promo: true,
                pricePromo: 990.9,
                image: "tenis03.png",
                active: false
            },
            {
                id: 4,
                name: "Nike Shoes Silver",
                price: 1500.9,
                promo: true,
                pricePromo: 990.9,
                image: "tenis04.png",
                active: true
            },
            {
                id: 5,
                name: "Nike Shoes Black",
                price: 1500.9,
                promo: true,
                pricePromo: 990.9,
                image: "tenis05.png",
                active: false
            },
            {
                id: 6,
                name: "Nike Shoes Red",
                price: 1500.9,
                promo: true,
                pricePromo: 990.9,
                image: "tenis06.png",
                active: true
            }
        ];
    }

    getProducts(status: string): Product[] {
        if(status === 'actives') {
            return this.products.filter(product => product.active);
        }

        return this.products;
    }

    getProductsById(id: number): Product {
        return this.products.find(product => product.id == id);
    }
}