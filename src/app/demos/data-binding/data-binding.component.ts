import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  public contadorClique: number = 0;
  public urlImagem: string = "https://angular.io/assets/images/logos/angular/angular.svg";
  public nome: string = "";
  color: ThemePalette = 'primary';
  mode: ProgressSpinnerMode = 'indeterminate';

  constructor() { }

  ngOnInit(): void { }

  adicionarClique() {
    this.contadorClique++;
    if (this.contadorClique >= 5 && this.contadorClique < 10) {
      this.color = 'warn';
    } else if (this.contadorClique >= 10) {
      this.color = 'accent';
    }
  }

  zerarContador() {
    this.contadorClique = 0;
    this.color = 'primary';
  }

  KeyUp(event: any) {
    this.nome = event.target.value;
  }

}
