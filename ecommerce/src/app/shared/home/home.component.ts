import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../core/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  products: any;

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.productsService.getAllProducts().subscribe(res => {
      console.log(res);
      this.products = res;
    })
  }
  
}
