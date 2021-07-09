import { Component, Input } from "@angular/core";
import { Product } from "../models/product";

@Component({
    selector: 'product-card-detail',
    templateUrl: './product-card-detail.component.html',
    styleUrls: ['./product-card-detail.component.css']
})

export class ProductDetailComponent{
    @Input()
    product: Product;
}