import { Observable } from 'rxjs';
import { Produto } from './produto';
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class ProdutoService{
    protected UrlServiceV1: string = "https://json-server-angular.herokuapp.com/";

    constructor(private http: HttpClient) {}

    obterProdutos() : Observable<Produto[]> {
        return this.http.get<Produto[]>(this.UrlServiceV1 + "produtos");
    }
}