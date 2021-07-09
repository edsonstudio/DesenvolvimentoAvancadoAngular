// ---------------Angular---------------
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { FormsModule } from '@angular/forms';

// ---------------Components---------------
import { FooterComponent } from './footer/footer.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { HomeComponent } from './home/home.component';
import { CardsComponent } from './home/cards/cards.component';

// ---------------Angular Material---------------
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@NgModule({
    declarations: [
        MainNavComponent,
        FooterComponent,
        HomeComponent,
        CardsComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        MatIconModule,
        MatListModule,
        MatToolbarModule,
        MatButtonModule,
        MatSidenavModule,
        MatSlideToggleModule,
        MatCardModule,
        MatProgressSpinnerModule,
        MatProgressBarModule,
        FormsModule
    ],
    exports: [
        MainNavComponent,
        FooterComponent,
        HomeComponent,
        CardsComponent
    ]
})
export class NavegacaoModule {}