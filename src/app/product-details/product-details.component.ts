import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PRODUCTS_LIST } from '../data';
import { CartService } from '../cart.service';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
product;
indexData: number;
indexInt = 0;
  constructor(private route: ActivatedRoute, private cartservice: CartService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.indexInt = PRODUCTS_LIST.length
      console.log(this.indexInt);
      this.indexData = +params.get('productID') +  1;
      console.log(this.indexData);
      this.product = PRODUCTS_LIST[+params.get('productID')];
  });
  }
  addToCart(product) {
    this.cartservice.addToCart(product);
  }
}
