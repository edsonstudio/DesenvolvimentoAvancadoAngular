import { ProductsService } from '../services/products.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../models/product';

@Component({
  selector: 'app-editar-produto',
  templateUrl: './editar-produto.component.html',
  styleUrls: ['./editar-produto.component.css']
})
export class EditarProdutoComponent implements OnInit {

  product: Product;

  constructor(
    private route: ActivatedRoute, 
    private productsService: ProductsService,
    private router: Router) { }

  ngOnInit() {
    this.route.params
    .subscribe(params => {
      this.product = this.productsService.getProductsById(params['id']);
    });
  }

  save() {
    //fazer comunicacao com o backend

    this.router.navigate(['/product']);
  }

  toCart() {
    //teste para chamar a tela de Error 404
    this.router.navigate(['/products']);
  }

}
