// ---------------Angular---------------
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
registerLocaleData(localePt);

// ---------------Services---------------
import { ProductsService } from './product-dashboard/products.service';

// ---------------Components---------------
import { ProductDashboardComponent } from './product-dashboard/product-dashboard.component';
import { ProductRoutingModule } from './product.route';
import { ProductDetailComponent } from './componentes/product-card-detail.component';
import { ProductCountComponent } from './componentes/product-count.component';

@NgModule({
    declarations: [
        ProductDashboardComponent,
        ProductDetailComponent,
        ProductCountComponent
    ],
    imports: [
        CommonModule,
        ProductRoutingModule
    ],
    exports: [],
    providers: [
        ProductsService
    ]
})
export class ProductModule{}