import { HttpClient } from '@angular/common/http';
import { BarUnidadeConfig, BAR_UNIDADE_CONFIG } from './bar.config';
import { Component, Inject, Injector, OnInit } from '@angular/core';
import { BarFactory, BarServices, BarServicesMock } from './bar.service';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.css'],
  providers: [
    // { provide: BarServices, useClass: BarServices },
    {
      provide: BarServices, useFactory: BarFactory,
      deps: [
        HttpClient, Injector
      ]
    }
  ]
})
export class BarComponent implements OnInit {

  configManual: BarUnidadeConfig;
  config: BarUnidadeConfig;
  barBebida1: string;
  dadosUnidade: string;

  constructor(private barServices: BarServices,
    @Inject('ConfigManualUnidade') private ApiConfigManual: BarUnidadeConfig,
    @Inject(BAR_UNIDADE_CONFIG) private ApiConfig: BarUnidadeConfig
    ) { }

  ngOnInit(): void {
    this.barBebida1 = this.barServices.obterBebidas();
    this.configManual = this.ApiConfigManual
    this.config = this.ApiConfig

    this.dadosUnidade = this.barServices.obterUnidade();
  }
}
