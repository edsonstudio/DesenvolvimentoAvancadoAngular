import { ProductAppComponent } from './product.app.component';
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
import { EditarProdutoComponent } from './editar-produto/editar-produto.component';

// ---------------Angular material---------------
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
    declarations: [
        ProductAppComponent,
        ProductDashboardComponent,
        ProductDetailComponent,
        ProductCountComponent,
        EditarProdutoComponent
    ],
    imports: [
        CommonModule,
        ProductRoutingModule,
        MatButtonModule,
        MatIconModule
    ],
    exports: [],
    providers: [
        ProductsService
    ]
})
export class ProductModule{}