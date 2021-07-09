import { Product } from './../models/product';
import { ProductsService } from './products.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-dashboard',
  templateUrl: './product-dashboard.component.html',
  styleUrls: ['./product-dashboard.component.css']
})
export class ProductDashboardComponent implements OnInit {

  constructor(private productsService: ProductsService) { }

  public products: Product[];

  ngOnInit(): void {
    this.productsService.getProducts().subscribe(
      products => {
        this.products = products;
        console.log(products);
      },
      error => console.log(error)
    );
  }

}
