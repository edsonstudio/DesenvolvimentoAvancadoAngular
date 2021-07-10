import { Product } from './../models/product';
import { Component, Input } from "@angular/core";

@Component({
    selector: 'product-count',
    template:
    `
        <div class="header">
            Produtos ativos: {{ contadorAtivos() }} no total de {{ products.length }} produtos.
        </div>
        `,
        styles: ['.header { margin-bottom: 20px; text-align: center; text-transform: uppercase; }']
})

export class ProductCountComponent{
    @Input()
    products: Product[];

    contadorAtivos(): number {
        if(!this.products) return;

        return this.products.filter((product: Product) => product.active).length;

    }
}
