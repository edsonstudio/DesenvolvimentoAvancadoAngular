import { LoaderService } from '../../loader/loader.service';
import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
	selector: 'app-main-nav',
	templateUrl: './main-nav.component.html',
	styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent {
	
	isDarkTheme: boolean = false;
	isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
		.pipe(
			map(result => result.matches),
			shareReplay()
		);

	constructor(private breakpointObserver: BreakpointObserver, public loaderService: LoaderService) { }

	ngOnInit() {
		this.isDarkTheme = localStorage.getItem('theme') === "Dark" ? true : false;
	}

	storeThemeSelection() {
		localStorage.setItem('theme', this.isDarkTheme ? "Dark" : "Light");
	}

	nav: Nav[] = [
		{
			link:'/home',
			name: 'Home',
			icon: 'home',
			exact: true,
			admin: false
		},
		{
			link:'/produtos',
			name: 'Produtos',
			icon: 'add_shopping_cart',
			exact: true,
			admin: false
		},
		{
			link:'/product',
			name: 'Products',
			icon: 'shopping_bag',
			exact: true,
			admin: false
		},
		{
			link:'/sobre',
			name: 'About',
			icon: 'info',
			exact: true,
			admin: false
		},
		{
			link:'/contato',
			name: 'Contact',
			icon: 'alternate_email',
			exact: true,
			admin: false
		},
		{
			link:'/feature-data-binding',
			name: 'Features',
			icon: 'fact_check',
			exact: true,
			admin: false
		},
		{
			link:'/cadastro',
			name: 'Register',
			icon: 'app_registration',
			exact: true,
			admin: false
		}
	];
}

interface Nav {
	link: string,
	name: string,
	icon: string, 
	exact: boolean,
	admin: boolean
}