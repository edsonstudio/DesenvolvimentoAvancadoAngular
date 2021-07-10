import { ProductDetailComponent } from './../componentes/product-card-detail.component';
import { ProductCountComponent } from './../componentes/product-count.component';
import { fromEvent, Observable } from 'rxjs';
import { Product } from './../models/product';
import { ProductsService } from './products.service';
import { Component, OnInit, ElementRef, ViewChild, AfterViewInit, ViewChildren, QueryList } from '@angular/core';

@Component({
  selector: 'app-product-dashboard',
  templateUrl: './product-dashboard.component.html',
  styleUrls: ['./product-dashboard.component.css']
})
export class ProductDashboardComponent implements OnInit, AfterViewInit {

  constructor(private productsService: ProductsService) { }

  public products: Product[];

  @ViewChild(ProductCountComponent, { static: false }) contador: ProductCountComponent;
  @ViewChild('teste', { static: false }) mensagemTela: ElementRef;

  @ViewChildren(ProductDetailComponent) cards: QueryList<ProductDetailComponent>;  

  ngOnInit(): void {
    this.productsService.getProducts().subscribe(
      products => {
        this.products = products;
        console.log(products);
      },
      error => console.log(error)
    );
  }

  ngAfterViewInit(): void {
    console.log('Objeto do Contador: ', this.contador.products);

    let clickTexto: Observable<any> = fromEvent(this.mensagemTela.nativeElement, 'click');
    clickTexto.subscribe(() => {
      alert('Você clicou no titulo !!! :D');
      return;
    });

    console.log('Cards: ', this.cards);
    this.cards.forEach(p => {
      console.log('Products log: ', p.product);
    });
  }

  mudarStatus(event: Product) {
    event.active = !event.active;
  }

}
