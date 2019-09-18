import { Component, OnInit } from '@angular/core';
import { PRODUCTS_LIST } from '../data';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
products = PRODUCTS_LIST;
  constructor() { }

  ngOnInit() {
  }

}
