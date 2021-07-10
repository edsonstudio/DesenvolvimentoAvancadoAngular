import { Product } from './../models/product';
import { Component, Input } from "@angular/core";

@Component({
    selector: 'product-count',
    template:
    `
        <div class="header">
            <h1>Products</h1>
            <div>
                Produtos ativos: {{ contadorAtivos() }} no total de {{ products.length }} produtos.
            </div>
        </div>
        `,
        styles: ['.header { text-align: center; margin: 20px 0; text-transform: uppercase; }']
})

export class ProductCountComponent{
    @Input()
    products: Product[];

    contadorAtivos(): number {
        if(!this.products) return;

        return this.products.filter((product: Product) => product.active).length;

    }
}
