import { ProductDetailComponent } from './../componentes/product-card-detail.component';
import { ProductCountComponent } from './../componentes/product-count.component';
import { fromEvent, Observable } from 'rxjs';
import { Product } from './../models/product';
import { Component, OnInit, ElementRef, ViewChild, AfterViewInit, ViewChildren, QueryList } from '@angular/core';

@Component({
  selector: 'app-product-dashboard',
  templateUrl: './product-dashboard.component.html',
  styleUrls: ['./product-dashboard.component.css']
})
export class ProductDashboardComponent implements OnInit, AfterViewInit {

  constructor() { }

  products: Product[];

  @ViewChild(ProductCountComponent, { static: false }) contador: ProductCountComponent;
  @ViewChild('teste', { static: false }) mensagemTela: ElementRef;

  @ViewChildren(ProductDetailComponent) cards: QueryList<ProductDetailComponent>;  

  ngOnInit(): void {
    this.products = [
      {
        id: 1,
        name: "Nike Shoes Green",
        price: 1500.9,
        promo: false,
        pricePromo: 0,
        image: "tenis01.png",
        active: false
      },
      {
        id: 2,
        name: "Nike Shoes Blue",
        price: 1500.9,
        promo: true,
        pricePromo: 990.9,
        image: "tenis02.png",
        active: true
      },
      {
        id: 3,
        name: "Nike Shoes Pink",
        price: 1500.9,
        promo: true,
        pricePromo: 990.9,
        image: "tenis03.png",
        active: true
      },
      {
        id: 4,
        name: "Nike Shoes Silver",
        price: 1500.9,
        promo: true,
        pricePromo: 990.9,
        image: "tenis04.png",
        active: true
      },
      {
        id: 5,
        name: "Nike Shoes Black",
        price: 1500.9,
        promo: true,
        pricePromo: 990.9,
        image: "tenis05.png",
        active: true
      },
      {
        id: 6,
        name: "Nike Shoes Red",
        price: 1500.9,
        promo: true,
        pricePromo: 990.9,
        image: "tenis06.png",
        active: true
      }
    ];
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
