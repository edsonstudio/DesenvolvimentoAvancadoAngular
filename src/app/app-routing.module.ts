import { NotFoundComponent } from './navegacao/not-found/not-found.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './navegacao/home/home.component';
import { CadastroComponent } from './demos/reactiveForms/cadastro/cadastro.component';
import { ContatoComponent } from './institucional/contato/contato.component';
import { SobreComponent } from './institucional/sobre/sobre.component';
import { DataBindingComponent } from './demos/data-binding/data-binding.component';
import { ListaProdutoComponent } from './produtos/lista-produto/lista-produto.component';

const routes: Routes = [
	{ path: '', redirectTo: '/home', pathMatch: 'full' },
	{ path: 'home', component: HomeComponent },
	{ path: 'contato', component: ContatoComponent },
	{ path: 'sobre', component: SobreComponent },
	{ path: 'feature-data-binding', component: DataBindingComponent },
	{ path: 'produtos', component: ListaProdutoComponent },
	{ path: 'produto-detalhe/:id', component: ListaProdutoComponent },
	{ path: 'cadastro', component: CadastroComponent },
	{ path: 'product',
	loadChildren: () => import('./demos/arquitetura-componentes/product.module')
	.then(m => m.ProductModule)},
	{ path: '**', component: NotFoundComponent }
];

@NgModule({
	declarations: [],
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
