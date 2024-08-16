import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  // baseUrl = 'https://localhost:3000/products/';
  baseUrl = 'https://shiny-giggle-5rxj56gxw45f7pxw-3000.app.github.dev/products';

  products: any[] = [];

  constructor(private http: HttpClient) { }

  getAllProducts(){
    return this.http.get(this.baseUrl).pipe(map((product: any) =>{
      console.log(product);
      this.products = product;
      return product;
    }))
  }
}
