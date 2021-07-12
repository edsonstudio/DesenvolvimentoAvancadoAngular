import { ProductAppComponent } from './product.app.component';
import { EditarProdutoComponent } from './editar-produto/editar-produto.component';
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { ProductDashboardComponent } from './product-dashboard/product-dashboard.component';
import { ProductResolve } from './services/product.resolve';

const productRouterConfig: Routes = [
    { path: '', component: ProductAppComponent, children: [
        { path: '', redirectTo: 'all' },
        { 
            path: ':status', 
            component: ProductDashboardComponent,
            resolve: {
                products: ProductResolve
            }
         },
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