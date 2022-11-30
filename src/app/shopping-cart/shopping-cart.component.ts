import { Component, OnInit } from '@angular/core';
import { NailserviceCartService } from '../nailservice-cart.service';
import { Nailservice } from '../nailservice-list/Nailservice';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  //books = [];
  cartList!: Nailservice[] ;
  //cartList$: Observable<Book[]>;

  constructor(private cart: NailserviceCartService) { 
    cart.cartList.subscribe(c=> this.cartList = c);
    //this.cartList$ = cart.cartList.asObservable();
  }

  ngOnInit(): void {
  }

  totalPrice(nailservice: Nailservice) {
    return nailservice.price;
  }

  total() {
    let total = 0;
    this.cartList.forEach(nailservice => total += this.totalPrice(nailservice));
    return total;
  }  
  
  removeFromCart(nailservice: Nailservice) {
    this.cart.removeFromCart(nailservice);
    
  }
}
