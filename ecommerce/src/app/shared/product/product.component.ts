import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit {

  @Input() product: any;

  constructor(){}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
