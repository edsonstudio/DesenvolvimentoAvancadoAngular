// ---------------Angular---------------
import { NgModule, Provider } from '@angular/core';
import { LayoutModule } from '@angular/cdk/layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
registerLocaleData(localePt);

// ---------------Components---------------
import { AppComponent } from './app.component';
import { SobreComponent } from './institucional/sobre/sobre.component';
import { ContatoComponent } from './institucional/contato/contato.component';
import { DataBindingComponent } from './demos/data-binding/data-binding.component';
import { ListaProdutoComponent } from './produtos/lista-produto/lista-produto.component';
import { CardProductComponent } from './produtos/card-product/card-product.component';
import { CadastroComponent } from './demos/reactiveForms/cadastro/cadastro.component';
import { FilmesComponent } from './demos/pipes/filmes/filmes.component';
import { FileSizePipe } from './demos/pipes/filmes/filesize.pipe';
import { ImageFormaterPipe } from './demos/pipes/filmes/image.pipe';

// ---------------Services---------------
import { ProdutoService } from './produtos/produtos.service';
import { AuthGuard } from './services/app.guard';
import { RegisterGuard } from './services/register.guard';
import { BarServices } from './demos/bar-di-zones/bar.service';

// ---------------Angular material---------------
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatRadioModule} from '@angular/material/radio';
import { MatGridListModule} from '@angular/material/grid-list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';

// ---------------Sub-modules---------------
import { NavegacaoModule } from './navegacao/navegacao.module';
import { BarModule } from './demos/bar-di-zones/bar.module';
import { TodoModule } from './demos/todo-list/todo.module';

// ---------------Validation modules---------------
import { NgBrazil } from 'ng-brazil';
import { TextMaskModule } from 'angular2-text-mask';
import { CustomFormsModule } from 'ng2-validation';

export const BAR_PROVIDERS: Provider[] = [
  BarServices
];

@NgModule({
  declarations: [
    AppComponent,
    SobreComponent,
    ContatoComponent,
    DataBindingComponent,
    ListaProdutoComponent,
    CardProductComponent,
    CadastroComponent,
    FilmesComponent,
    FileSizePipe,
    ImageFormaterPipe
  ],
  imports: [
    NavegacaoModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatGridListModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    NgBrazil,
    TextMaskModule,
    CustomFormsModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatTableModule,
    BarModule.forRoot({
      unidadeId: 1000,
      unidadeToken: 'eca938c99a0e9ff91029dc'
    }),
    TodoModule
  ],
  providers: [
    ProdutoService,
    AuthGuard,
    RegisterGuard,
    // BAR_PROVIDERS
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
