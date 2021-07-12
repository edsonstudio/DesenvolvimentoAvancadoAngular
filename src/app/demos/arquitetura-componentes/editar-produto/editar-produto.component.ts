import { ProductsService } from './../product-dashboard/products.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../models/product';

@Component({
  selector: 'app-editar-produto',
  templateUrl: './editar-produto.component.html',
  styleUrls: ['./editar-produto.component.css']
})
export class EditarProdutoComponent implements OnInit {

  product: Product;

  constructor(private route: ActivatedRoute, private productsService: ProductsService) { }

  ngOnInit() {
    this.route.params
    .subscribe(params => {
      this.product = this.productsService.getProductsById(params['id']);
    });
  }

}
