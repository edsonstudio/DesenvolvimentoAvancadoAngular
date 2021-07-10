import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Product } from "../models/product";

@Component({
    selector: 'product-card-detail',
    templateUrl: './product-card-detail.component.html',
    styleUrls: ['./product-card-detail.component.css']
})

export class ProductDetailComponent{
    @Input()
    product: Product;

    @Output()
    status: EventEmitter<any> = new EventEmitter();

    emitirEvento() {
        this.status.emit(this.product);
    }
}