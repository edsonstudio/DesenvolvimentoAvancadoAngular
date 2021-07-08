import { LoaderService } from './../loader/loader.service';
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

}
