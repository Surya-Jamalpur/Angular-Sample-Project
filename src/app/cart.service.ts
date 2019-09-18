import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
items = [];
public subject = new Subject<any>();
  constructor() { }

addToCart(product){
    this.items.push(product);
    this.subject.next(this.items.length);
  }
  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  getMessage(): Observable<any> {
    return this.subject.asObservable();
  }
}
