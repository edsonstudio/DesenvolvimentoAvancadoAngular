import { ProductAppComponent } from './product.app.component';
import { EditarProdutoComponent } from './editar-produto/editar-produto.component';
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { ProductDashboardComponent } from './product-dashboard/product-dashboard.component';

const productRouterConfig: Routes = [
    { path: '', component: ProductAppComponent, children: [
        { path: '', component: ProductDashboardComponent },
        { path: 'edit/:id', component: EditarProdutoComponent }
    ]},
];

@NgModule({
    imports: [
        RouterModule.forChild(productRouterConfig)
    ],
    exports: [RouterModule]
})
export class ProductRoutingModule{}