import { Product } from './../models/product';
import { Component, Input } from "@angular/core";

@Component({
    selector: 'product-count',
    template:
    `
        <div>
            <h2>Products</h2>
            <div>
                Produtos ativos: {{ contadorAtivos() }} no total de {{ products.length }} produtos. <br><br>
            </div>
        </div>
    `
})

export class ProductCountComponent{
    @Input()
    products: Product[];

    contadorAtivos(): number {
        if(!this.products) return;

        return this.products.filter((product: Product) => product.active).length;

    }
}
