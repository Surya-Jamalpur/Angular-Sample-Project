import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms'
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
items;
checkoutForm;
  constructor(private cartservice:CartService, private formbuilder : FormBuilder) {
    this.items = this.cartservice.getItems();
    this.checkoutForm = this.formbuilder.group({
      name: '',
      address: ''
    }) }
    onSubmit(customerData) {
      // Process checkout data here
      console.log('Your order has been submitted', customerData);
  
      this.items = this.cartservice.clearCart();
      this.checkoutForm.reset();
    }

  ngOnInit() {
    
  }

}
