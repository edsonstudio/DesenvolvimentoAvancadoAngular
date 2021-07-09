import { Product } from './../models/product';
import { Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class ProductsService{
    protected UrlServiceV1: string = "https://json-server-angular.herokuapp.com/";

    constructor(private http: HttpClient) {}

    getProducts() : Observable<Product[]> {
        return this.http.get<Product[]>(this.UrlServiceV1 + "products");
    }
}