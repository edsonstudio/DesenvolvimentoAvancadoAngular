import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProductDashboardComponent } from './product-dashboard/product-dashboard.component';
import { ProductRoutingModule } from './product.route';

@NgModule({
    declarations: [
        ProductDashboardComponent
    ],
    imports: [
        CommonModule,
        ProductRoutingModule
    ],
    exports: []
})
export class ProductModule{}