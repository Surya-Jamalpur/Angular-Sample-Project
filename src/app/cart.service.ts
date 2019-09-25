import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CartService {
items = [];
public subject = new Subject<any>();

  constructor(private http: HttpClient) { }

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
  getShippingPrices() {
    return this.http.get('assets/shipping.json');
  }
}
