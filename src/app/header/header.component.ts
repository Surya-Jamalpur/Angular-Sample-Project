import { Component, OnInit, OnDestroy } from '@angular/core';
import { Employees, MAIN_NAV_ITEMS } from '../data';
import { CartService } from '../cart.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  mainNavItems = MAIN_NAV_ITEMS;
  employees = Employees;
  subscription: Subscription;
  itemsLength = 0

  constructor(private cartservice: CartService) {
    this.subscription = this.cartservice.getMessage().subscribe(length => { this.itemsLength = length; });
   }
  

  ngOnInit() {
   
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
