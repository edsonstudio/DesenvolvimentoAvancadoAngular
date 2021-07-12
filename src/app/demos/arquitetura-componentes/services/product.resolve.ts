import { ProductsService } from './products.service';
import { Product } from './../models/product';
import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve } from "@angular/router";

@Injectable()
export class ProductResolve implements Resolve<Product[]>{

    constructor(private productService: ProductsService){}

    resolve(route: ActivatedRouteSnapshot) {
        return this.productService.getProducts(route.params.status);
    }
}